<?php


namespace JFB_Compatibility\Jet_Engine\Parsers;

use Jet_Form_Builder\Exceptions\Parse_Exception;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Map_Field_Parser extends Field_Data_Parser {

	/**
	 * @return mixed
	 */
	public function type() {
		return 'map-field';
	}

	/**
	 * @return mixed
	 * @throws Parse_Exception
	 */
	public function get_response() {
		if ( empty( $this->value ) ) {
			return $this->value;
		}

		$request = $this->context->get_request();

		$lat_name = $this->name . '_lat';
		$lng_name = $this->name . '_lng';

		throw new Parse_Exception(
			'Merge with request',
			array(
				$this->name => $this->value,
				$lat_name   => $request[ $lat_name ] ?? 0,
				$lng_name   => $request[ $lng_name ] ?? 0,
			)
		);
	}

}
