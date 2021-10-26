<?php

namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Paypal\Actions\Get_Token;
use Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Rest_Api_Controller;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Gateways\Base_Gateway;

class Controller extends Base_Gateway {

	const ID = 'paypal';

	public $data     = false;
	public $message  = false;
	public $redirect = false;

	protected $token_query_name = 'token';

	public function __construct() {
		( new Rest_Api_Controller() )->rest_api_init();
	}

	/**
	 * Returns current gateway ID
	 *
	 * @return [type] [description]
	 */
	public function get_id() {
		return self::ID;
	}

	/**
	 * Returns current gateway name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return __( 'PayPal Checkout', 'Paypal gateways editor data', 'jet-form-builder' );
	}

	protected function options_list() {
		return array(
			'client_id'    => array(
				'label' => _x( 'Client ID', 'Paypal gateways editor data', 'jet-form-builder' ),
			),
			'secret'       => array(
				'label' => _x( 'Secret Key', 'Paypal gateways editor data', 'jet-form-builder' ),
			),
			'currency'     => array(
				'label'    => _x( 'Currency Code', 'Paypal gateways editor data', 'jet-form-builder' ),
				'required' => false,
			),
			'use_global'   => array(
				'label'    => _x( 'Use Global Settings', 'Paypal gateways editor data', 'jet-form-builder' ),
				'required' => false,
			),
			'gateway_type' => array(
				'label'   => _x( 'Gateway Action', 'Paypal gateways editor data', 'jet-form-builder' ),
				'default' => Scenarios_Logic\Pay_Now::scenario_id(),
			),
		);
	}

	public function additional_editor_data() {
		return array(
			'gateway_types' => array(
				array(
					'value' => Scenarios_Logic\Pay_Now::scenario_id(),
					'label' => _x( 'Pay Now', 'Paypal gateway editor data', 'jet-form-builder' ),
				),
				array(
					'value' => Scenarios_Logic\Subscribe_Now::scenario_id(),
					'label' => _x( 'Create a subscription', 'Paypal gateway editor data', 'jet-form-builder' ),
				),
			),
		);
	}

	// statuses from scenario

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function failed_statuses() {
		return $this->query_scenario()->get_failed_statuses();
	}

	protected function retrieve_gateway_meta() {
		return Plugin::instance()->post_type->get_gateways( $this->data['form_id'] ?? 0 );
	}

	/**
	 * @return string|void
	 * @throws Gateway_Exception
	 */
	public function get_payment_token() {
		return $this->query_scenario()->get_queried_token();
	}

	/**
	 * @param $order_id
	 * @param $form_id
	 *
	 * @return mixed|void
	 * @throws Gateway_Exception
	 */
	protected function query_order_token( $order_id, $form_id ) {
		return $this->get_current_token();
	}

	/**
	 * Process gateway payment
	 *
	 * @param $action_handler
	 *
	 * @return void [type] [description]
	 * @throws Gateway_Exception
	 */
	public function after_actions( Action_Handler $action_handler ) {
		$this->get_scenario()->process_before();
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	protected function retrieve_payment_instance() {
		return $this->query_scenario()->process_after();
	}

	/**
	 * @throws Gateway_Exception
	 */
	protected function set_gateway_data_on_result() {
		$this->query_scenario()->process_save();
	}

	/**
	 * @return Scenarios_Logic\Scenario_Logic_Base
	 * @throws Gateway_Exception
	 */
	public function get_scenario() {
		return Scenarios_Manager::instance()->get_logic( $this )->install( $this );
	}

	/**
	 * @return Scenarios_Logic\Scenario_Logic_Base
	 * @throws Gateway_Exception
	 */
	public function query_scenario() {
		return Scenarios_Manager::instance()->query_logic()->install( $this );
	}

	public static function get_credentials() {
		return Gateway_Manager::instance()->get_global_settings( self::ID );
	}

	/**
	 * Returns auth token for current client_id and secret combination
	 *
	 * @return mixed|void [description]
	 * @throws Gateway_Exception
	 */
	public function get_current_token() {
		$client_id = $this->current_gateway( 'client_id' );
		$secret    = $this->current_gateway( 'secret' );

		return self::get_token_with_credits( $client_id, $secret );
	}

	/**
	 * @param $form_id
	 *
	 * @return mixed|string
	 * @throws Gateway_Exception
	 */
	public static function get_token_by_form_id( $form_id ) {
		$paypal = Gateway_Manager::instance()->get_form_gateways_by_id( $form_id )[ self::ID ] ?? array();

		if ( empty( $paypal['secret'] ) || empty( $paypal['client_id'] ) ) {
			return self::get_token_global();
		}

		return self::get_token_with_credits( $paypal['secret'], $paypal['client_id'] );
	}

	/**
	 * @return mixed|string
	 * @throws Gateway_Exception
	 */
	public static function get_token_global() {
		$credits = self::get_credentials();

		$secret    = $credits['secret'] ?? false;
		$client_id = $credits['client_id'] ?? false;

		return self::get_token_with_credits( $client_id, $secret );
	}

	/**
	 * @param $client_id
	 * @param $secret
	 *
	 * @return mixed|string
	 * @throws Gateway_Exception
	 */
	public static function get_token_with_credits( $client_id, $secret ) {
		if ( ! $client_id || ! $secret ) {
			return '';
		}
		$hash  = md5( $client_id . $secret );
		$token = get_transient( $hash );

		if ( $token ) {
			return $token;
		}

		$response = ( new Get_Token() )
			->set_credentials( $client_id, $secret )
			->send_request();

		if ( empty( $response['access_token'] ) ) {
			throw new Gateway_Exception( $response['error_description'] );
		}

		$token = $response['access_token'];

		set_transient( $hash, $token, $response['expires_in'] * 0.9 );

		return $token;
	}

}
