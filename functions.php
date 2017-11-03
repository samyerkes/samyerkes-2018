<?php

/* Disable emojis */
function disable_wp_emojicons() {
  // all actions related to emojis
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
  // filter to remove TinyMCE emojis
  add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
}
add_action( 'init', 'disable_wp_emojicons' );

function add_custom_styles_and_scripts() {
  wp_enqueue_style( 'style', get_stylesheet_uri() );  
  wp_enqueue_script( 'script', get_template_directory_uri() . '/js/app.js', array (), 1, true);
}
add_action( 'wp_enqueue_scripts', 'add_custom_styles_and_scripts' );

add_theme_support( 'post-thumbnails', array( 'post', 'photos' ) );