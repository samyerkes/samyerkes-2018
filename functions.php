<?php

/* Disable standard image gallery style */
// Remove Gallery Styling
add_filter( 'gallery_style', 'my_gallery_style', 99 );
function my_gallery_style() {
    return "
";
}
add_filter( 'use_default_gallery_style', '__return_false' );

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
  wp_enqueue_style( 'style', get_template_directory_uri() . '/dist/app.css' );  
  wp_enqueue_script( 'script', get_template_directory_uri() . '/js/app.js', array (), 1, true);
}
add_action( 'wp_enqueue_scripts', 'add_custom_styles_and_scripts' );

add_theme_support( 'post-thumbnails', array( 'post', 'photos' ) );

add_filter('post_gallery','customFormatGallery',10,2);

function customFormatGallery($string,$attr){

    $output = "<div class=\"columns is-multiline\">";
    $posts = get_posts(array('include' => $attr['ids'],'post_type' => 'attachment'));

    foreach($posts as $imagePost){
        $output .= "<div class=\"column is-half-tablet\">";
          $output .= "<img src='".wp_get_attachment_image_src($imagePost->ID, 'medium_large')[0]."'>";
        $output .= "</div>";
    }

    $output .= "</div>";

    return $output;
}