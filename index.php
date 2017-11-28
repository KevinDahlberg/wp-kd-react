<?php
/**
 * This "theme" sets up wordpress to be used to manage the content of your site and not the main view.
 * It is designed to be used in conjunction with with a front end that utilizes the Wordpress REST API.
 * The accompanying plugin that registers all the extra routes can be found at:
 * https://github.com/KevinDahlberg/wp-rest-routes-plugin
 *
 * @package wpkdreact
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
	<title>Kevin Dahlberg</title>

	<!-- change this url to match the url of your main site -->
	<meta http-equiv="refresh" content="0; url=http://kevindahlberg.com" />
	
	<?php wp_head(); ?>
</head>
<body>
	<noscript>You need to enable JavaScript to run this app.</noscript>

 <div id="root"></div>

 <?php wp_footer(); ?>

</body>
</html>
