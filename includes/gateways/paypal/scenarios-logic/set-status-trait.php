<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

trait Set_Status_Trait {

	/**
	 * @throws Gateway_Exception
	 */
	private function set_payment_status() {
		$payment = $this->controller->get_payment();

		if ( empty( $payment['status'] ) ) {
			throw new Gateway_Exception( 'Empty payment status' );
		}

		$this->controller->set_post_meta( 'status', $payment['status'] );
	}

}