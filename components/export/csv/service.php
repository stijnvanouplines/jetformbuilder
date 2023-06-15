<?php


namespace JFB_Components\Export\Csv;

use JFB_Components\Export\Interfaces\Base_Export_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Service implements Base_Export_It {

	private $file;
	private $file_name;

	public function open() {
		if ( false === strpos( ini_get( 'disable_functions' ), 'set_time_limit' ) ) {
			set_time_limit( 0 );
		}
		ignore_user_abort( true );

		// phpcs:disable WordPress.PHP
		@session_write_close();
		@ini_set( 'zlib.output_compression', 'Off' );

		if ( function_exists( 'apache_setenv' ) ) {
			$variable = 'no-gzip';
			$value    = 1;
			@apache_setenv( $variable, $value );
		}
		nocache_headers();

		header( 'Robots: none' );
		header( 'Content-Type: text/csv; charset=utf-8' );
		header( 'Content-Description: File Transfer' );
		header( 'Content-Disposition: attachment; filename="' . $this->file_name . '";' );
		header( 'Content-Transfer-Encoding: binary' );

		// phpcs:enable WordPress.PHP
	}

	protected function get_file() {
		if ( ! is_null( $this->file ) ) {
			return $this->file;
		}

		$this->file = fopen( 'php://output', 'w' );
		/**
		 * Add BOM to fix UTF-8 in Excel
		 *
		 * @see https://www.php.net/manual/en/function.fputcsv.php#118252
		 */
		$bom = chr( 0xEF ) . chr( 0xBB ) . chr( 0xBF );

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_fputs
		fputs( $this->file, $bom );

		return $this->file;
	}

	public function add_row( array $row ) {
		fputcsv( $this->get_file(), $row );
	}

	public function close() {
		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_fclose
		fclose( $this->get_file() );
	}

	public function set_title( string $title ) {
		$this->file_name = sanitize_title( $title ) . '.csv';
	}

	public function get_title(): string {
		return $this->file_name;
	}
}