<?php
/*
Plugin Name: pjax
Plugin URI: 
Description: Improve admin fluidity with PJAX
Version: 0.0.1
Author: Leo Colombaro
Author URI: http://colombaro.fr
*/

// No direct call
if( !defined( 'YOURLS_ABSPATH' ) ) die();

require_once __DIR__ . "vendor/autoload.php";
use Turbo\Turbo;

function yp_body( $content ) {
    $turbo = new Turbo();
    if ($turbo->isPjax()) {
        return $turbo->extract((string)$content);
    }
}
