let mix = require('laravel-mix');

mix.sass('src/css/app.scss', 'dist')
	.js('src/js/app.js', 'dist');