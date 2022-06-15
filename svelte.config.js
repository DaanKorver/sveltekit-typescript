import adapter from '@sveltejs/adapter-auto'
import path from 'node:path/win32'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},
	vite: {
		resolve: {
			alias: {
				$lib: path.resolve('./src/lib')
			}
		}
	}
}

export default config
