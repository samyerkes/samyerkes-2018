<?php
	/*
	* Include for posts with featured images
	 */
	?>
	<div class="py-8">
	    <div class="card-image">
	        <?php echo get_the_post_thumbnail( $post->ID, 'medium' ); ?>
	    </div>
	    <div class="card-content">
	        <div class="content">
	        	<?php
					the_title( '<h2 class="text-4xl text-gray-600"><a href="' . esc_url( get_permalink() ) . '" class="font-thin" rel="bookmark">', '</a></h2>' );
					the_excerpt();
				?>
	        </div>
	    </div>
	</div>