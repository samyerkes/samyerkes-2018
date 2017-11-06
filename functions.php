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

// Async load scripts
add_filter( 'script_loader_tag', 'samyerkes_async_scripts', 10, 3 );
function samyerkes_async_scripts( $tag, $handle, $src ) {
  // The handles of the enqueued scripts we want to async
  if ( $handle == 'samyerkes' ) {
    return '<script type="text/javascript" src="' . $src . '" async></script>' . "\n";
  }
  return $tag;
} 

function samyerkes_add_custom_styles_and_scripts() {
  wp_enqueue_style( 'samyerkes', get_template_directory_uri() . '/dist/app.css' );  
  wp_enqueue_script( 'samyerkes', get_template_directory_uri() . '/dist/app.js', array (), 1, true);
}
add_action( 'wp_enqueue_scripts', 'samyerkes_add_custom_styles_and_scripts' );

// Creates the manifest link tag
function samyerkes_manifest_link() {   
  echo '<link rel="manifest" href="' . get_template_directory_uri(). '/manifest.json">';
}
add_action( 'wp_head', 'samyerkes_manifest_link' );

// Remove Wordpress Generator (version)
remove_action('wp_head', 'wp_generator');

add_theme_support( 'post-thumbnails', array( 'post', 'photos' ) );

// Custom Image Gallery Markup
add_filter('post_gallery','samyerkes_custom_image_gallery_format',10,2);
function samyerkes_custom_image_gallery_format($string,$attr){
    $output = "<div class=\"columns is-multiline\">";
    $posts = get_posts(array('include' => $attr['ids'],'post_type' => 'attachment'));
    foreach($posts as $imagePost){
        $output .= "<div class=\"column is-half-tablet\">";
          $output .= wp_get_attachment_image( $imagePost->ID, 'large', "", array( "class" => "image" ) );
        $output .= "</div>";
    }
    $output .= "</div>";
    return $output;
}

function samyerkes_deregister_scripts(){
  wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_footer', 'samyerkes_deregister_scripts' );