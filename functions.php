<?php
/**
 * WP KD React functions
 * 
 * @package WordPress
 * @subpackage wp_kd_react
 * @since 1.0
 */

/**
 * enqueue scripts and styles
 */

function theme_scripts() {
  wp_enqueue_style ('stylesheet', get_stylesheet_uri() );

  // wp_enqueue_style ('built_css', get_template_directory_uri() . '/static/css/main.562f8556.css');


  //adds the compiled react file
  wp_enqueue_script ('built_js', get_template_directory_uri() . '/public/bundle.js', array(), 1.0, true);

  //makes various wordpress settings available for use in the JS
  wp_localize_script('queries', 'WPsettings', array(
			'root' => esc_url_raw( rest_url() )
		));

}
add_action( 'wp_enqueue_scripts', 'theme_scripts');


/**
 * setup theme settings
 */
function wpkdreact_setup() {
  
  //title tag support
  add_theme_support( 'title-tag' );

  //Post Thumbnails on posts and pages
  add_theme_support( 'post-thumbnails' );

  add_image_size( 'wpkdreact-featured-image', 2000, 1200, true);

  add_image_size( 'wpkdreact-thumbnail-avatar', 100, 100, true);

  //theme support for custom header
  add_theme_support( 'custom-header', apply_filters( 'wpkdreact_custom_header_args', array(
    'width' => 2000,
    'height' => 1200,
    'flex-height' => true,
    'video' => false
  ) ) );

  //registers nav menus
  register_nav_menus(
    array(
      'nav_menu' => __( 'Nav Menu' )
    )
  );
}
add_action ( 'after_setup_theme', 'wpkdreact_setup' );

//might want to add widget functionality for footers in future iterations
?>
