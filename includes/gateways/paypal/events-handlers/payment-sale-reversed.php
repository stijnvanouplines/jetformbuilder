<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

class Payment_Sale_Reversed extends Event_Handler_Base {

	public static function get_event_type() {
		return 'PAYMENT.SALE.REVERSED';
	}

}
