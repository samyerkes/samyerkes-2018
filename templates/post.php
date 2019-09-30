<?php
	/*
	* Include for posts without featured images
	 */
	?>
	
	<div class="level">
		<div class="level-left">
			<?php
				the_title( '<h2 class="text-4xl pt-4 text-gray-600">', '</h2>' );
			?>
		</div>
		<?php if (! is_page() ) : ?>
			<div class="level-right">
				<p class="subtitle text-base pb-4">
					<?php the_date( 'F j, Y' ); ?>
				</p>
			</div>
		<?php endif; ?>
	</div>
	<?php if ( has_post_thumbnail() ) : ?>
		<div class="level">
			<?php the_post_thumbnail(); ?>
		</div>
	<?php endif; ?>
	<div class="entry-content">
		<?php the_content(); ?>
	</div>