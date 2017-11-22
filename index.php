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
		<main id="main-content" class="section">

			<div class="container">
				<div class="content">
					<div class="columns">
						
						<div class="column is-three-quarters">
							<?php if ( have_posts() ) : ?>
								<?php while ( have_posts() ) : the_post(); ?>
									<article>
										<?php
											if ( is_singular() ) :
												include('templates/post.php');
											else :
												include('templates/post_card_excerpt.php');
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
							<?php include('templates/pagination.php'); ?>
						</div>
					</div>	
				</div>	
			</div>
		</main>
	</div>

<?php
get_footer();