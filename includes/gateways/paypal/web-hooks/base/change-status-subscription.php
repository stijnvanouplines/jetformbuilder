<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Base;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Rest_Api\Dynamic_Rest_Url_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Gateways\Paypal\Api_Actions;

abstract class Change_Status_Subscription extends Rest_Api_Endpoint_Base {

	use Dynamic_Rest_Url_Trait;

	abstract public function get_action_instance(): Api_Actions\Base_Action;

	abstract public function success_message(): string;

	public static function get_rest_dynamic_base(): string {
		return '(?P<code>[\w\-]+)';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$body            = $request->get_json_params();
		$subscription_id = $request->get_param( 'code' );


		try {
			/**
			 * Execute this action if there is an entry
			 * with this $subscription_id in the database
			 */

			( new Query_Builder() )
				->set_view(
					( new Paypal\Query_Views\Paypal_Subscriptions_Find_View() )
						->find_by( 'subscription_id', $subscription_id )
				)
				->debug()
				->query_one();

		} catch ( Query_Builder_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				404
			);
		}

		try {
			$action = $this->get_action_instance()
				->set_bearer_auth(
					Paypal\Controller::get_token_by_form_id( $body['form_id'] ?? false )
				)->set_body(
					array(
						'reason' => $body['reason'],
					)
				)->set_subscription_id( $request->get_param( 'code' ) )
				->request()
				->check_response_code();

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				500
			);
		}

		return new \WP_REST_Response(
			array(
				'message' => $action->response_message(
					$this->success_message()
				),
			)
		);
	}

}
