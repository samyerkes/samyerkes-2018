let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist')
	.js('src/js/offline.js', 'dist');


mix.postCss('src/css/app.scss', 'dist', [
	require('tailwindcss'),
]);