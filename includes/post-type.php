<?php

namespace Jet_Form_Builder;


use Jet_Form_Builder\Classes\Messages_Helper_Trait;
use Jet_Form_Builder\Compatibility\Jet_Style_Manager;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Post_Type class
 */
class Post_Type {

	use Messages_Helper_Trait;

	public $allow_gateways;

	/**
	 * Used to define the editor
	 *
	 * @var boolean
	 */
	public $is_form_editor;

	/**
	 * Constructor for the class
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'current_screen', array( $this, 'set_current_screen' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_assets' ) );

		/**
		 * TODO: change FALSE to TRUE before release
		 */
		$this->allow_gateways = apply_filters( 'jet-form-builder/allow-gateways', false );
	}


	/**
	 * Register admin assets
	 *
	 * @return void [type] [description]
	 */
	public function admin_assets() {

		if ( $this->is_form_editor ) {
			Plugin::instance()->editor->enqueue_assets();

		} elseif ( false === $this->is_form_editor ) {
			Plugin::instance()->editor->enqueue_form_assets();
		}
	}

	/**
	 * Returns current post type slug
	 *
	 * @return string [type] [description]
	 */
	public function slug() {
		return 'jet-form-builder';
	}


	public function set_current_screen() {
		$screen = get_current_screen();

		if ( ! $screen->action ) {
			$screen->action = ! empty( $_GET['action'] ) ? $_GET['action'] : '';
		}

		$is_editor_page = in_array( $screen->action, array( 'add', 'edit' ) );

		if ( $this->slug() === $screen->id && $is_editor_page ) {
			$this->is_form_editor = true;

		} elseif ( $this->slug() !== $screen->id && $is_editor_page ) {
			$this->is_form_editor = false;
		}
	}

	/**
	 * Register templates post type
	 *
	 * @return void
	 */
	public function register_post_type() {

		$args = array(
			'labels'              => array(
				'name'               => esc_html__( 'Jet Forms', 'jet-form-builder' ),
				'singular_name'      => esc_html__( 'Jet Form', 'jet-form-builder' ),
				'add_new'            => esc_html__( 'Add New', 'jet-form-builder' ),
				'add_new_item'       => esc_html__( 'Add New Jet Form', 'jet-form-builder' ),
				'edit_item'          => esc_html__( 'Edit Jet Form', 'jet-form-builder' ),
				'new_item'           => esc_html__( 'Add New Item', 'jet-form-builder' ),
				'view_item'          => esc_html__( 'View Jet Form', 'jet-form-builder' ),
				'search_items'       => esc_html__( 'Search Form', 'jet-form-builder' ),
				'not_found'          => esc_html__( 'No Jet Forms Found', 'jet-form-builder' ),
				'not_found_in_trash' => esc_html__( 'No Jet Forms Found In Trash', 'jet-form-builder' ),
				'menu_name'          => esc_html__( 'Jet Forms', 'jet-form-builder' ),
			),
			'public'              => true,
			'show_ui'             => true,
			'show_in_admin_bar'   => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => false,
			'exclude_from_search' => true,
			'has_archive'         => false,
			'query_var'           => false,
			'can_export'          => true,
			'rewrite'             => false,
			'capability_type'     => 'post',
			'supports'            => array( 'title', 'editor', 'custom-fields' ),
		);

		$post_type = register_post_type(
			$this->slug(),
			apply_filters( 'jet-form-builder/post-type/args', $args )
		);

		$this->set_default_messages();

		$meta = array(
			'_jf_args'      => array(
				'type'    => 'string',
				'default' => json_encode( $this->get_default_args() ),
			),
			'_jf_recaptcha' => array(
				'type'    => 'string',
				'default' => '{}',
			),

			'_jf_actions'  => array(
				'type'    => 'string',
				'default' => '[]',
			),
			'_jf_messages' => array(
				'type'    => 'string',
				'default' => $this->get_default_messages_values_json(),
			),
			'_jf_preset'   => array(
				'type'    => 'string',
				'default' => '{}',
			),
		);

		if ( $this->allow_gateways ) {
			$meta['_jf_gateways'] = array(
				'type'    => 'string',
				'default' => '{}',
			);
		}

		foreach ( $meta as $key => $args ) {

			$args = array_merge( $args, array(
				'show_in_rest'  => true,
				'single'        => true,
				'auth_callback' => function ( $res, $key, $post_id, $user_id, $cap ) {
					return user_can( $user_id, 'edit_post', $post_id );
				}
			) );

			register_post_meta( $this->slug(), $key, $args );

		}

	}

	public function get_form_meta( $meta_key, $form_id ) {
		return json_decode( get_post_meta(
			$form_id,
			$meta_key,
			true
		),
			true
		);
	}

	/**
	 * Returns form meta arguments:
	 * fields_layout, submit_type, captcha and required_mark
	 * in assoc array
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_args( $form_id ) {
		return $this->get_form_meta( '_jf_args', $form_id );
	}

	/**
	 * Returns form messages
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_messages( $form_id ) {
		$messages = $this->get_form_meta( '_jf_messages', $form_id );

		if ( empty( $messages ) ) {
			return $this->messages;
		}

		return $messages;
	}

	/**
	 * Returns form actions
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_actions( $form_id ) {
		return $this->get_form_meta( '_jf_actions', $form_id );
	}

	/**
	 * Returns form actions
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_preset( $form_id ) {
		return $this->get_form_meta( '_jf_preset', $form_id );
	}

	/**
	 * Returns captcha settings
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_recaptcha( $form_id ) {
		return $this->get_form_meta( '_jf_recaptcha', $form_id );
	}

	public function maybe_get_jet_sm_ready_styles( $form_id ) {
		if ( Jet_Style_Manager::is_activated() ) {
			return get_post_meta( $form_id, '_jet_sm_ready_style', true );
		}

		return '';
	}


	/**
	 * Returns form gateways
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_gateways( $form_id ) {
		return $this->get_form_meta( '_jf_gateways', $form_id );
	}

	public function get_default_arg__submit_type() {
		return $this->get_default_args()['submit_type'];
	}

	public function get_default_arg__required_mark() {
		return $this->get_default_args()['required_mark'];
	}

	public function get_default_arg__fields_layout() {
		return $this->get_default_args()['fields_layout'];
	}

	public function get_default_args() {
		return array(
			'submit_type'   => 'reload',
			'required_mark' => '*',
			'fields_layout' => 'column',
		);
	}


	public function set_default_messages() {
		$this->messages = apply_filters( 'jet-form-builder/message-types', array(
			'success'           => array(
				'label' => __( 'Form successfully submitted.', 'jet-form-builder' ),
				'value' => 'Form successfully submitted.',
			),
			'failed'            => array(
				'label' => __( 'Submit failed.', 'jet-form-builder' ),
				'value' => 'There was an error trying to submit form. Please try again later.',
			),
			'validation_failed' => array(
				'label' => __( 'Validation error', 'jet-form-builder' ),
				'value' => 'One or more fields have an error. Please check and try again.',
			),
			'captcha_failed'    => array(
				'label' => __( 'Captcha validation failed', 'jet-form-builder' ),
				'value' => __( 'Captcha validation failed', 'jet-form-builder' ),
			),
			'invalid_email'     => array(
				'label' => __( 'Entered an invalid email', 'jet-form-builder' ),
				'value' => 'The e-mail address entered is invalid.',
			),
			'empty_field'       => array(
				'label' => __( 'Required field is empty', 'jet-form-builder' ),
				'value' => 'The field is required.',
			),
			'internal_error'    => array(
				'label' => __( 'Internal server error', 'jet-form-builder' ),
				'value' => 'Internal server error. Please try again later.',
			),
			'upload_max_files'  => array(
				'label' => __( 'Media Specific: Max files limit', 'jet-form-builder' ),
				'value' => 'Maximum upload files limit is reached.',
			),
			'upload_max_size'   => array(
				'label' => __( 'Media Specific: Max size reached', 'jet-form-builder' ),
				'value' => 'Upload max size exceeded.',
			),
			'upload_mime_types' => array(
				'label' => __( 'Media Specific: File type error', 'jet-form-builder' ),
				'value' => 'File type is not allowed.',
			),
		) );
	}

}
