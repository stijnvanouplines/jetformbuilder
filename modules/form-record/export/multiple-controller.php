<?php


namespace JFB_Modules\Form_Record\Export;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View;
use JFB_Modules\Form_Record\Query_Views\Record_View;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Multiple_Controller extends Base_Export_Controller {

	protected $form_id;

	/**
	 * @throws \Exception
	 */
	public function do_export() {
		$this->form_id        = $this->get_form_id();
		$this->fields_columns = $this->get_field_columns();
		$this->modify_extra_columns();

		if ( ! $this->fields_columns && ! $this->extra_columns ) {
			throw new \Exception(
				__( 'Fields or additional columns must be specified', 'jet-form-builder' )
			);
		}

		$this->get_exporter()->set_title( $this->get_file_name() );
		$this->get_exporter()->open();

		// headings
		$this->get_exporter()->add_row( $this->prepare_row( $this->fields_columns, $this->extra_columns ) );

		$this->add_rows();
		$this->get_exporter()->close();
		die;
	}

	protected function add_rows() {
		try {
			$records = $this->get_records();
		} catch ( Query_Builder_Exception $exception ) {
			return;
		}

		$fields_view     = $this->get_fields_view();
		$fields_headings = array_keys( $this->fields_columns );
		$fields_empty    = array();

		foreach ( $fields_headings as $name ) {
			$fields_empty[ $name ] = '';
		}

		foreach ( $records as $record ) {
			$fields_view->set_conditions( array() );
			$fields_view->set_filters(
				array(
					'record_id' => $record['id'],
					'names'     => $fields_headings,
				)
			);

			try {
				$fields_values = $this->get_fields_values( $fields_view, $fields_headings );
			} catch ( Query_Builder_Exception $exception ) {
				$fields_values = $fields_empty;
			}

			$this->get_exporter()->add_row( $this->prepare_row( $fields_values, $record ) );
		}
	}

	/**
	 * @param Record_Fields_View $view
	 * @param array $fields_headings
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	protected function get_fields_values( Record_Fields_View $view, array $fields_headings ): array {
		$fields_values = array();
		$fields        = $view->query()->generate_all();

		foreach ( $fields as $field ) {
			foreach ( $fields_headings as $field_name ) {
				if ( ! isset( $fields_values[ $field_name ] ) ) {
					$fields_values[ $field_name ] = '';
				}

				if ( ( $field->field_name ?? '' ) !== $field_name ) {
					continue;
				}

				$fields_values[ $field_name ] = $field->field_value;
			}
		}

		return $fields_values;
	}

	protected function get_field_columns(): array {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$fields  = array_map( 'sanitize_key', (array) ( $_GET['fields'] ?? array() ) );
		$columns = array();

		$blocks = Block_Helper::get_blocks_by_post( $this->form_id );

		foreach ( $fields as $field_name ) {
			$block = Block_Helper::find_block_by_name( $field_name, $blocks );

			if ( empty( $block['attrs']['label'] ) ) {
				$columns[ $field_name ] = $field_name;
				continue;
			}

			$columns[ $field_name ] = $block['attrs']['label'];
		}

		return $columns;
	}

	protected function modify_extra_columns() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$extra = array_map( 'sanitize_key', (array) ( $_GET['extra'] ?? array() ) );

		foreach ( $this->extra_columns as $column_name => $label ) {
			if ( ! in_array( $column_name, $extra, true ) ) {
				unset( $this->extra_columns[ $column_name ] );
			}
		}
	}

	/**
	 * @return int
	 * @throws \Exception
	 */
	protected function get_form_id(): int {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$form_id = absint( $_GET['filters']['form'] ?? '' );

		if ( ! $form_id ) {
			throw new \Exception(
				__( 'Form ID is empty', 'jet-form-builder' )
			);
		}

		return $form_id;
	}

	/**
	 * @return \Generator
	 * @throws Query_Builder_Exception
	 */
	protected function get_records(): \Generator {
		$view = ( new Record_View() )->set_filters(
		// phpcs:ignore WordPress.Security
			(array) ( $_GET['filters'] ?? array() )
		);
		$view->set_select( array_keys( $this->extra_columns ) );

		return $view->query()->generate_all( ARRAY_A );
	}

	protected function get_fields_view(): Record_Fields_View {
		$view = new Record_Fields_View();
		$view->set_select(
			array(
				'field_value',
				'field_name',
			)
		);

		return $view;
	}

	protected function get_file_name(): string {
		return get_the_title( $this->form_id ) . ' ' . __( 'records', 'jet-form-builder' );
	}


}