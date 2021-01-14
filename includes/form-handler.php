<?php

namespace Jet_Form_Builder;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;

/**
 * Form builder class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Jet_Engine_Booking_Forms_Handler class
 */
class Form_Handler {

	public $hook_key = 'jet_form_builder_submit';
	public $hook_val = 'submit';
	public $form_data = array();
	public $response_data = array();
	public $is_ajax = false;
	public $is_success = false;
	public $response_status = 'failed';

	public $form_id;
	public $refer;
	public $manager;
	public $action_handler;
	public $request_data;

	public $form_key  = '_jet_engine_booking_form_id';
	public $refer_key = '_jet_engine_refer';
	public $post_id_key = '__queried_post_id';

	/**
	 * Constructor for the class
	 */
	function __construct() {

		if ( wp_doing_ajax() ) {

			add_action(
				'wp_ajax_' . $this->hook_key,
				array( $this, 'process_ajax_form' )
			);
			add_action(
				'wp_ajax_nopriv_' . $this->hook_key,
				array( $this, 'process_ajax_form' )
			);

		} else {

			if ( ! isset( $_REQUEST[ $this->hook_key ] ) || $this->hook_val !== $_REQUEST[ $this->hook_key ] ) {
				return;
			}

			add_action( 'wp_loaded', array( $this, 'process_form' ), 0 );
		}
	}

	/**
	 * Is ajax form processing or not
	 *
	 * @return boolean [description]
	 */
	public function is_ajax() {
		return $this->is_ajax;
	}

	/**
	 * Setup form data
	 *
	 * @return [type] [description]
	 */
	public function setup_form() {
		global $post;

		if ( ! $this->is_ajax ) {
			$this->form_id = ! empty( $_REQUEST[ $this->form_key ] ) ? $_REQUEST[ $this->form_key ] : false;
			$this->refer   = ! empty( $_REQUEST[ $this->refer_key ] ) ? $_REQUEST[ $this->refer_key ] : false;
			$post = ! empty( $_REQUEST[ $this->post_id_key ] ) ? get_post( $_REQUEST[ $this->post_id_key ] ) : null;
		} else {

			$values = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

			foreach ( $values as $data ) {
				switch ( $data['name'] ) {
					case $this->form_key:
						$this->form_id = $data['value'];
						break;
					case $this->post_id_key:
						$post = get_post( $data['value'] );
						break;
				}
			}

		}
	}

	/**
	 * Check if current form has configured gateway
	 *
	 * @return boolean [description]
	 */
	public function has_gateway() {
		return apply_filters( 'jet-form-builder/form-handler/has-gateways', false, $this->form_id );
	}

	/**
	 * Process form with Ajax
	 *
	 * @return [type] [description]
	 */
	public function process_ajax_form() {
		$this->is_ajax = true;
		$this->process_form();
	}

	/**
	 * Process current form
	 *
	 * @return [type] [description]
	 */
	public function process_form() {

		$this->setup_form();

		$this->try_set_data();

		do_action( 'jet-form-builder/form-handler/before-send', $this );

		$this->try_to_do_actions();

		do_action( 'jet-form-builder/form-handler/after-send', $this, $this->is_success );

		if ( true === $this->is_success ) {
			$this->send_response( array(
				'status' => 'success',
			) );
		} else {
			$this->send_response( array(
				'status' => 'failed',
			) );
		}
	}

	public function try_set_data() {
		try {
			$request            = array(
				'form_id' => $this->form_id,
				'is_ajax' => $this->is_ajax,
				'refer'   => $this->refer
			);
			$this->request_data = ( new Request_Handler( $request ) )->get_form_data();

		} catch ( Request_Exception $exception ) {
			$this->send_response( array(
				'status' => $exception->get_form_status(),
				'errors' => $exception->get_fields_errors()
			) );
		}
	}


	public function try_to_do_actions() {
		try {
			$this->action_handler = new Action_Handler( $this->form_id, $this->request_data );

			$this->add_response_data( $this->action_handler->do_actions() );
			$this->is_success = true;

		} catch ( Handler_Exception $exception ) {

			$this->send_response( array(
				'status' => $exception->get_form_status(),
			) );
		}
	}

	/**
	 * Add new properties into response data
	 *
	 * @param array $data [description]
	 */
	public function add_response_data( $data = array() ) {
		$this->response_data = array_merge( $this->response_data, $data );
	}

	public function get_message_builder( $form_id = null ) {

		$form_id = $this->form_id ? $this->form_id : $form_id;

		if ( $this->action_handler && ! empty( $this->action_handler->form_actions ) ) {
			$actions = $this->action_handler->form_actions;
		} else {
			$actions = ( new Action_Handler( $form_id ) )->get_all();
		}

		$data = ( object ) array(
			'form_id' => $form_id,
			'actions' => $actions
		);

		return new Form_Messages_Builder( $data );
	}

	/**
	 * Redirect back to refer
	 *
	 * @param array $args [description]
	 *
	 * @return [type]       [description]
	 */
	public function send_response( $args = array() ) {

		$args = wp_parse_args( $args, array(
			'status' => 'success',
			'errors' => array()
		) );

		$error_statuses = array( 'validation_failed', 'invalid_email' );

		$this->response_status = $args['status'];

		$query_args = array(
			'status' => $this->response_status,
		);

		$query_args = array_merge( $query_args, $this->response_data );

		// Clear form-related arguments
		$this->refer = remove_query_arg( array( 'values', 'status', 'fields' ), $this->refer );

		if ( 'validation_failed' === $this->response_status ) {
			if ( $this->is_ajax ) {
				$query_args['fields'] = $args['errors'];
			} else {
				$query_args['fields'] = urlencode( json_encode( $args['errors'] ) );
			}
		}

		$send_values = apply_filters( 'jet-form-builder/form-handler/send-values-on-error', true );

		if ( ! $this->is_ajax && $send_values && in_array( $this->response_status, $error_statuses ) ) {
			$query_args['values'] = $this->form_data;
		}

		$query_args = apply_filters( 'jet-form-builder/form-handler/query-args', $query_args, $args, $this );

		if ( $this->is_ajax ) {

			$messages = $this->get_message_builder()->set_form_status( $this->response_status );

			ob_start();
			$messages->render_messages();
			$query_args['message'] = ob_get_clean();

			if ( 'validation_failed' === $this->response_status ) {
				ob_start();
				$messages->render_empty_field_message();
				$query_args['field_message'] = ob_get_clean();
			}

			wp_send_json( $query_args );
		} else {
			$query_args['status'] = urlencode( $query_args['status'] );

			$redirect = add_query_arg( $query_args, $this->refer );
			wp_redirect( $redirect );
			die();
		}
	}

}


