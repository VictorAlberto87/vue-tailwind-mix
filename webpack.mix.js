let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');



mix.js('src/app.js', 'dist/')
	.sass('src/scss/app.scss', 'dist/')
	.options({
		processCssUrls: false,
		postCss: [ tailwindcss('./tailwind.config.js') ],
	})
	.purgeCss({
		folders: ['dist'],
	});

