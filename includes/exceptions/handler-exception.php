<?php


namespace Jet_Form_Builder\Exceptions;


use Jet_Form_Builder\Dev_Mode\Logger;
use Throwable;

abstract class Handler_Exception extends \Exception {
	protected $default_type_message = 'failed';
	protected $dynamic_message = '';

	protected $additional_data;

	public function __construct( $message = "", $additional_data = array() ) {
		parent::__construct( $message, 0, null );

		$this->additional_data = $additional_data;

		Logger::instance()->log( $this );
	}


	public function get_form_status() {
		return $this->message ? $this->message : $this->default_type_message;
	}

	public function get_additional() {
		return $this->additional_data;
	}

}