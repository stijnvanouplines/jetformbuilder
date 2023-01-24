<?php
/**
 * @since 3.0.0
 */
// phpcs:disable WordPress.DB.DirectDatabaseQuery

// if uninstall.php is not called by WordPress, die
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	die;
}

$opt_prefixes = array(
	'jet\_form\_builder\_settings\_\_',
	'jet\_fb\_'
);

$tables = array(
	// secondary tables
	'records_actions',
	'records_errors',
	'records_fields',
	'subscription_to_payer_shipping',
	'subscriptions_to_records',
	'subscriptions_to_payments',
	'subscriptions_notes',
	'payment_to_payer_shipping',
	'payments_to_records',
	'payers_shipping',
	// primary tables
	'csrf_tokens',
	'recurring_cycles',
	'subscriptions',
	'payments',
	'migrations',
	'payers',
	'records',
);

/**
 * @var wpdb $wpdb
 */
global $wpdb;

foreach ( $tables as $table_name ) {
	$wpdb->query( 'DROP TABLE IF EXISTS ' . $wpdb->prefix . 'jet_fb_' . $table_name  );
}

foreach ( $opt_prefixes as $opt_prefix ) {
	$wpdb->query( "DELETE FROM {$wpdb->options} WHERE option_name LIKE '{$opt_prefix}%'" );
}

$forms = get_posts(
	[
		'post_type'   => [ 'jet-form-builder' ],
		'post_status' => 'any',
		'numberposts' => - 1,
		'fields'      => 'ids',
	]
);
if ( $forms ) {
	foreach ( $forms as $form_id ) {
		wp_delete_post( $form_id, true );
	}
}

/**
 * @var WP_Filesystem_Base $wp_filesystem
 */
global $wp_filesystem;

$uploads_directory = wp_upload_dir();
if ( empty( $uploads_directory['error'] ) ) {
	$wp_filesystem->rmdir( $uploads_directory['basedir'] . '/jet-form-builder/', true );
}
