<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Sam Yerkes, Web Developer #RVA">

    <title><?php echo wp_title('|', true, 'right') . get_bloginfo('name'); ?></title>
    
    <?php wp_head(); ?>
</head>

<body>
    <div id="skip-links">
      <a href="#main-content">Skip to content</a>
      <a href="#main-navigation">Skip to navigation</a>
      <a href="#main-footer">Skip to footer</a>
    </div>

    <div id="app">
      
        <header id="main-navigation" class="hero is-bold">
          <div class="hero-body">
            <div class="container">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <h1 class="title">
                                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Sam Yerkes</a>
                            </h1>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
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
                                echo preg_replace('/<a /', '<a class="nav-item"', $themeMenu);
                            ?>
                        </div>
                    </div>
                </div>
              
            </div>
          </div>
        </header>