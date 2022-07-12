<?php
/**
 * @var Jet_Form_Builder\Blocks\Render\Base $this
 */

use Jet_Form_Builder\Classes\Tools;

$this->add_attribute( 'type', 'hidden' );
$this->add_attribute( 'name', $this->block_type->get_field_name() );
$this->add_attribute( 'data-field-name', $args['name'] ?? '' );
$this->add_attribute(
	'data-settings',
	htmlspecialchars(
		Tools::encode_json( $this->block_type->get_field_settings() )
	)
);
?>
<div class="jet-fb-map-field">
	<input <?php $this->render_attributes_string(); ?> />
</div>
