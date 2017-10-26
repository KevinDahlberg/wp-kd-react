<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package theocdcoder
 * @version 1.0
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<meta name="theme-color" content="#000000">
	<link rel="manifest" href="/manifest.json">
	<link rel="shortcut icon" href="/favicon.ico">
	<title>The OCD Coder</title>
	<?php wp_head(); ?>
</head>
<body>
	<noscript>You need to enable JavaScript to run this app.</noscript>
