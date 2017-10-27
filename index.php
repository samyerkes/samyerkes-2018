<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="section">

			<div class="container">
				<div class="content">
					<div class="columns">
						
						<div class="column is-three-quarters">
							<?php if ( have_posts() ) : ?>
								<?php while ( have_posts() ) : the_post(); ?>
									<article>
										<div class="level">
											<div class="level-left">
												<?php
													if ( is_singular() ) :
														the_title( '<h2 class="title">', '</h2>' );
													else :
														the_title( '<h2 class="title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
													endif;
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
										<?php
											if ( is_singular() ) :
												the_content();
											else :
												the_excerpt();
											endif;
										?>
									</article>
								<?php endwhile; ?> 
							<?php else : ?>
								<h2>No posts to show...</h2>
							<?php endif; ?>
						</div>
						<div class="column is-one-quarter">
							<?php get_sidebar(); ?>
						</div>
					</div>	
				</div>	
			</div>
		</main>
	</div>

<?php
get_footer();