<?php

namespace Jet_Form_Builder\Classes;

// If this file is called directly, abort.
use Jet_Form_Builder\Plugin;

if ( ! defined( 'WPINC' ) ) {
	die;
}


class Tools {

	const EMPTY_DEEP_VALUE = self::class;

	public static function is_editor() {
		return self::is_block_editor() || self::is_elementor_editor();
	}

	public static function is_block_editor() {
		$allowed_actions = array( 'add', 'edit' );

		return (
			in_array( self::sanitize_get_param( 'context' ), $allowed_actions, true )
			|| in_array( self::sanitize_get_param( 'action' ), $allowed_actions, true )
		);
	}

	public static function sanitize_get_param( $param_name ) {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return ! empty( $_GET[ $param_name ] ) ? sanitize_key( $_GET[ $param_name ] ) : '';
	}

	public static function is_elementor_editor() {
		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			return false;
		}

		return ( \Elementor\Plugin::instance()->editor->is_edit_mode() );
	}

	/**
	 * Returns all post types list to use in JS components
	 *
	 * @param bool $placeholder
	 *
	 * @param array $args
	 * @param string $operator
	 *
	 * @return array [type] [description]
	 */
	public static function get_post_types_for_js( $placeholder = false, $args = array(), $operator = 'and' ) {

		$post_types = get_post_types( $args, 'objects', $operator );

		$post_types_list = array();

		if ( $placeholder && is_array( $placeholder ) ) {
			$placeholder['value'] = isset( $placeholder['value'] ) ? $placeholder['value'] : '';
			$post_types_list[]    = $placeholder;
		}

		foreach ( $post_types as $post_type ) {
			if ( $post_type->name !== Plugin::instance()->post_type->slug() ) {
				$post_types_list[] = array(
					'value' => $post_type->name,
					'label' => $post_type->label,
				);
			}
		}

		return self::with_placeholder( $post_types_list );
	}

	/**
	 * Get post types list for options.
	 *
	 * @return array
	 */
	public static function get_post_types_for_options() {
		return self::get_post_types_for_js( false, array( 'public' => true ) );
	}

	private static function get_escape_func( $type ) {
		switch ( $type ) {
			case 'template':
			default:
				return array( self::class, 'esc_template' );
		}
	}

	/**
	 * Sanitize WYSIWYG field
	 *
	 * @param $input
	 *
	 * @return string
	 */
	public static function sanitize_wysiwyg( $input ) {
		$input = wp_kses_post( $input );
		$input = wp_specialchars_decode( stripslashes( $input ), ENT_COMPAT );

		return $input;
	}

	/**
	 * Return all taxonomies list to use in JS components
	 *
	 * @param array $args
	 *
	 * @return array
	 */
	public static function get_taxonomies_for_js( $args = array() ) {
		$taxonomies = get_taxonomies( $args, 'objects' );

		return self::with_placeholder( self::prepare_list_for_js( $taxonomies, 'name', 'label' ) );
	}

	public static function get_generators_list_for_js() {
		$generators = Plugin::instance()->form->get_generators_list();

		return self::prepare_list_for_js( $generators );
	}

	public static function get_allowed_mimes_list_for_js() {
		$mimes = get_allowed_mime_types();

		$mimes_list = array();
		foreach ( $mimes as $mime ) {
			$mimes_list[] = array(
				'label' => $mime,
				'value' => $mime
			);
		}

		return $mimes_list;
	}

	/**
	 * Returns all registeredroles for JS
	 */
	public static function get_user_roles_for_js( $exclude = array( 'administrator' ) ) {

		$roles  = self::get_user_roles( $exclude );
		$result = array();

		foreach ( $roles as $role => $label ) {
			$result[] = array(
				'value' => $role,
				'label' => $label,
			);
		}

		return self::with_placeholder( $result );
	}

	public static function get_options_pages_for_js() {
		$pages = array();

		if ( function_exists( 'jet_engine' ) ) {
			$pages = jet_engine()->options_pages->get_options_pages_for_select();
		}

		return self::prepare_list_for_js( $pages );
	}

	/**
	 * Returns pages list
	 * @return [type] [description]
	 */
	public static function get_pages_list_for_js() {
		$pages = get_pages();

		return self::prepare_list_for_js( $pages, 'ID', 'post_title' );
	}

	/**
	 * Returns pages list
	 *
	 * @param bool $for_elementor
	 *
	 * @return array [description]
	 */
	public static function get_forms_list_for_js( $for_elementor = false ) {
		$posts = get_posts( array(
			'post_status'    => 'publish',
			'posts_per_page' => - 1,
			'post_type'      => jet_form_builder()->post_type->slug(),
		) );

		return self::prepare_list_for_js( $posts, 'ID', 'post_title', $for_elementor );
	}

	public static function get_form_settings_options( $for_elementor = false ) {
		$submit_type   = array(
			''       => '--',
			'reload' => 'Page Reload',
			'ajax'   => 'AJAX',
		);
		$fields_layout = array(
			''       => '--',
			'column' => 'Column',
			'row'    => 'Row'
		);

		if ( ! $for_elementor ) {
			$submit_type   = self::prepare_list_for_js( $submit_type );
			$fields_layout = self::prepare_list_for_js( $fields_layout );
		}

		return array(
			'submit_type'   => $submit_type,
			'fields_layout' => $fields_layout
		);
	}

	/**
	 * Returns all registered user roles
	 *
	 * @param string[] $exclude
	 *
	 * @return array [type] [description]
	 */
	public static function get_user_roles( $exclude = array( 'administrator' ) ) {

		if ( ! function_exists( 'get_editable_roles' ) ) {
			return array();
		} else {
			$roles  = get_editable_roles();
			$result = array();

			foreach ( $roles as $role => $data ) {
				if ( ! in_array( $role, $exclude ) ) {
					$result[ $role ] = $data['name'];
				}
			}

			return $result;
		}
	}

	/**
	 * Prepare passed array for using in JS options
	 *
	 * @param array $array
	 * @param null $value_key
	 * @param null $label_key
	 * @param bool $for_elementor
	 *
	 * Only if $for_elementor === false
	 * @param array $additional_attrs
	 *
	 * @return array [type] [description]
	 */
	public static function prepare_list_for_js(
		$array = array(),
		$value_key = null,
		$label_key = null,
		$for_elementor = false,
		$additional_attrs = array()
	) {

		$result = array();

		if ( ! is_array( $array ) || empty( $array ) ) {
			return $result;
		}

		foreach ( $array as $key => $item ) {

			$value = null;
			$label = null;

			if ( is_scalar( $item ) ) {
				$value = $key;
				$label = $item;
			} else {
				$value = self::get_property( $item, $value_key );
				$label = self::get_property( $item, $label_key );
			}

			if ( $for_elementor ) {
				$result[ $value ] = $label;
			} else {
				$prepared = array(
					'value' => $value,
					'label' => $label,
				);
				foreach ( $additional_attrs as $attr ) {
					$prepared[ $attr ] = self::get_property( $item, $attr );
				}

				$result[] = $prepared;
			}
		}

		return $result;

	}

	public static function with_placeholder( $array, $label = '--' ) {
		return array_merge(
			array(
				array( 'label' => $label, 'value' => '' ),
			),
			$array
		);
	}

	/**
	 * Check if is valid timestamp
	 *
	 * @param mixed $timestamp
	 *
	 * @return boolean
	 */
	public static function is_valid_timestamp( $timestamp ) {
		return ( ( string ) ( int ) $timestamp === $timestamp || ( int ) $timestamp === $timestamp )
		       && ( $timestamp <= PHP_INT_MAX )
		       && ( $timestamp >= ~PHP_INT_MAX );
	}

	public static function array_merge_intersect_key( $source, $arrays ) {
		foreach ( $source as $index => $path ) {
			$name = isset( $path['path'] ) ? $path['path'] : $index;

			$deep_value = self::getDeepValue( $name, $arrays );

			if ( self::EMPTY_DEEP_VALUE === $deep_value ) {
				unset( $source[ $index ] );
			} else {
				$source[ $index ] = $deep_value;
			}
		}

		return $source;
	}

	public static function getDeepValue( $key, $source ) {
		$keys = explode( '/', $key );
		$last = end( $keys );
		reset( $keys );

		return self::deep( $keys, current( $keys ), $last, $source );
	}

	private static function deep( $array, $key, $last, $source ) {

		if ( isset( $source[ $key ] ) ) {
			if ( $last !== $key ) {
				return self::deep( $array, next( $array ), $last, $source[ $key ] );
			}

			return $source[ $key ];
		}

		return self::EMPTY_DEEP_VALUE;
	}

	public static function run_callbacks( $callbacks = array(), ...$params ) {
		if ( ! $callbacks ) {
			return;
		}

		foreach ( $callbacks as $callback ) {
			if ( ! is_callable( $callback ) ) {
				continue;
			}
			call_user_func( $callback, ...$params );
		}
	}

	public static function decode_unserializable( $value ) {
		$data = json_decode( $value, true );

		return $data ? $data : maybe_unserialize( $value );
	}

	public static function sanitize_recursive( $source = null ) {
		if ( ! is_array( $source ) ) {
			return self::sanitize( $source );
		}

		$result = array();

		foreach ( $source as $key => $value ) {
			$result[ $key ] = self::sanitize_recursive( $value );
		}

		return $result;
	}

	public static function sanitize( $source ) {
		if ( self::is_url( $source ) ) {
			return esc_url_raw( $source );
		}

		if ( is_numeric( $source ) ) {
			return (float) $source;
		}

		return self::sanitize_text_field( $source );
	}

	public static function is_url( $url ) {
		return wp_http_validate_url( $url );
	}

	public static function sanitize_text_field( $source ) {
		$str = (string) $source;

		$filtered = wp_check_invalid_utf8( $str );
		$filtered = preg_replace( '@<(script|style)[^>]*?>.*?</\\1>@si', '', $filtered );

		return trim( $filtered );
	}

	/**
	 * @param $type
	 * @param mixed ...$values
	 *
	 * @return mixed
	 */
	private static function call_escape_func( $type, ...$values ) {
		return call_user_func( self::get_escape_func( $type ), ...$values );
	}

	public static function recursive_wp_kses( $source, $allowed_html = 'strip' ) {
		if ( ! is_array( $source ) ) {
			return wp_kses( $source, $allowed_html );
		}

		$result = array();
		foreach ( $source as $key => $value ) {
			$result[ $key ] = self::sanitize_recursive( $value );
		}

		return $result;
	}

	public static function sanitize_files( $source ) {
		if ( ! is_array( $source ) ) {
			return false;
		}

		$response = array();

		foreach ( $source as $index => $item ) {
			foreach ( $item as $key => $value ) {
				switch ( $key ) {
					case 'error':
					case 'size':
						$response[ $index ][ $key ] = absint( $value );
						break;
					case 'name':
						$response[ $index ][ $key ] = sanitize_file_name( $value );
						break;
					case 'type':
						$response[ $index ][ $key ] = sanitize_mime_type( $value );
						break;
					case 'tmp_name':
						$response[ $index ][ $key ] = sanitize_text_field( $value );
						break;
				}
			}
		}

		return $response;
	}

	/**
	 * @param $source
	 *
	 * @return string
	 */
	private static function esc_template( $source ): string {
		return self::sanitize_text_field( $source );
	}

	public static function get_jet_engine_version() {
		return function_exists( 'jet_engine' )
			? jet_engine()->get_version()
			: false;
	}

	public static function is_readable( string $filename ) {
		return strlen( $filename ) <= PHP_MAXPATHLEN && is_readable( $filename );
	}

	/**
	 * Returns template path
	 *
	 * @param  [type] $path [description]
	 *
	 * @return [type]       [description]
	 */
	public static function get_global_template( $path = '' ) {
		return JET_FORM_BUILDER_PATH . 'templates/' . $path;
	}

	public static function array_merge_recursive_distinct( array &$array1, array &$array2 ) {
		$merged = $array1;

		foreach ( $array2 as $key => &$value ) {
			if ( is_array( $value )
			     && isset ( $merged [ $key ] )
			     && is_array( $merged [ $key ] )
			) {
				$merged [ $key ] = self::array_merge_recursive_distinct( $merged [ $key ], $value );
			} else {
				$merged [ $key ] = $value;
			}
		}

		return $merged;
	}

	public static function get_property( $source, $name, $if_not_exist = '' ) {
		if ( is_object( $source ) ) {
			return $source->{$name} ?? $if_not_exist;
		}

		return $source[ $name ] ?? $if_not_exist;
	}

	public static function render_block_with_context( $block, $context ) {
		return ( new \WP_Block( $block, $context ) )->render();
	}
	
	public static function esc_template_string( $source ) {
		return self::call_escape_func( 'template', $source );
	}

}