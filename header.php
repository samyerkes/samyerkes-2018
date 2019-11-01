<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo get_bloginfo('description') ? get_bloginfo('description') : "Sam Yerkes, Web Developer #RVA"; ?>">

    <title><?php echo wp_title('|', true, 'right') . get_bloginfo('name'); ?></title>
    
    <meta name="theme-color" content="#1976d2"/>
    <?php wp_head(); ?>
</head>

<body>
    <div id="skip-links">
      <a href="#main-content">Skip to content</a>
      <a href="#main-navigation">Skip to navigation</a>
      <a href="#main-footer">Skip to footer</a>
    </div>

    <div id="app" class="px-4">      
        <header id="main-navigation">
          <div class="container mx-auto border-b border-gray-600 py-16">
              <div class="flex justify-between flex-row">
                  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                      <div class="">
                          <h1 class="text-3xl">
                              <a href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Link to the homepage">Sam Yerkes</a>
                          </h1>
                      </div>
                  </div>
                  <div class="">
                      <div class="">
                        <?php
                            $menuParameters = array(
                              'container'       => false,
                              'depth'           => 0,
                              'echo'            => false,
                              'items_wrap'      => '%3$s',
                              'menu_class'    => 'level-item',
                              'theme_location' => 'primary',
                            );
                            $themeMenu = strip_tags(wp_nav_menu( $menuParameters ), '<a>' );
                            echo preg_replace('/<a /', '<a class="text-base"', $themeMenu);
                        ?>
                  </div>
              </div>
          </div>
        </header>