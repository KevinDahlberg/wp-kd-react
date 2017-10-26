<?php
/**
 * enqueue scripts and styles
 */

function theme_scripts() {
  wp_enqueue_style ('stylesheet', get_stylesheet_uri() );

  wp_enqueue_style ('built_css', get_template_directory_uri() . '/static/css/main.562f8556.css');


  //adds the compiled react file
  wp_enqueue_script ('built_js', get_template_directory_uri() . '/static/js/main.073804b7.js', array(), 1.0, true);

  //makes various wordpress settings available for use in the JS
  wp_localize_script('queries', 'WPsettings', array(
			'root' => esc_url_raw( rest_url() )
		));

}
add_action( 'wp_enqueue_scripts', 'theme_scripts');

?>
