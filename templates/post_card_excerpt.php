<?php
	/*
	* Include for posts with featured images
	 */
	?>
	<div class="card">
	    <div class="card-image">
	        <figure class="image ">
	            <?php echo get_the_post_thumbnail( $post->ID, 'medium_large' ); ?>
	        </figure>
	    </div>
	    <div class="card-content">
	        <div class="content">
	        	<?php
					the_title( '<h2 class="title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
					the_excerpt();
				?>
	        </div>
	    </div>
	</div>