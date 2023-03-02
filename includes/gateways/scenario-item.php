<?php


namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Classes\Repository\Repository_Static_Item_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Scenario_Item extends Repository_Static_Item_It {

	public static function scenario_id();

}
