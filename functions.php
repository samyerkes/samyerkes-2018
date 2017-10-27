<?php

wp_enqueue_style( 'style', get_stylesheet_uri() );

wp_enqueue_script( 'script', get_template_directory_uri() . '/js/app.js', array (), 1, true);