<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;


class Payment_Sale_Refunded extends Event_Handler_Base {

	public function get_event_type() {
		return 'PAYMENT.SALE.REFUNDED';
	}

}