let mix 		= require('laravel-mix'),
	tailwindcss = require('tailwindcss');

const distDir = 'dist';

mix.js('src/js/app.js', distDir)
	.js('src/js/offline.js', distDir);

mix.sass('src/css/app.scss', distDir)
	.options({
	  processCssUrls: false,
	  postCss: [ tailwindcss('./tailwind.config.js') ],
	});