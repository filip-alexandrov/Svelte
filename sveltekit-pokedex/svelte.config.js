import adapter from '@sveltejs/adapter-auto';
// svelte.config.js
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [tailwind, autoprefixer]
		}
	}),
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
