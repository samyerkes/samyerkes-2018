<?php
	/*
	* Include for posts without featured images
	 */
	?>
	
	<div class="level">
		<div class="level-left">
			<?php
				the_title( '<h2 class="title">', '</h2>' );
			?>
		</div>
		<?php if (! is_page() ) : ?>
			<div class="level-right">
				<p class="subtitle is-5">
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