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

// defer load scripts
add_filter( 'script_loader_tag', 'samyerkes_defer_scripts', 10, 3 );
function samyerkes_defer_scripts( $tag, $handle, $src ) {
  // The handles of the enqueued scripts we want to defer
  if ( $handle == 'samyerkes' ) {
    return '<script type="text/javascript" src="' . $src . '" defer></script>' . "\n";
  }
  return $tag;
} 

// modify image tag
function samyerkes_modify_thumbnail_html($html, $post_id, $post_thumbnail_id, $size, $attr) {
  $id = get_post_thumbnail_id(); // gets the id of the current post_thumbnail (in the loop)
  $image = wp_get_attachment_image($id, $size, "", array('class' => 'lazyload') ); // gets the image url specific to the passed in size (aka. custom image size)
  return str_replace('src', 'data-src', $image );
}
add_filter('post_thumbnail_html', 'samyerkes_modify_thumbnail_html', 99, 5);

function samyerkes_add_custom_styles_and_scripts() {
  wp_enqueue_style( 'samyerkes', get_template_directory_uri() . '/dist/app.css' );  
  wp_enqueue_script( 'samyerkes_main', get_template_directory_uri() . '/dist/app.js', array (), 1, true);
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
          $output .= str_replace('src', 'data-src', wp_get_attachment_image( $imagePost->ID, 'large', "", array( "class" => "image lazyload" ) ));
        $output .= "</div>";
    }
    $output .= "</div>";
    return $output;
}

function samyerkes_deregister_scripts(){
  wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_footer', 'samyerkes_deregister_scripts' );

// Add classes to pagination links
add_filter('next_posts_link_attributes', 'samyerkes_post_links_next');
add_filter('previous_posts_link_attributes', 'samyerkes_post_links_previous');
function samyerkes_post_links_previous() {
    return 'class="pagination-next" aria-label="Newer posts"';
}
function samyerkes_post_links_next() {
    return 'class="pagination-previous" aria-label="Previous posts"';
}