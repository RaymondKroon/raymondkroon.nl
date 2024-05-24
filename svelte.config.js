import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import preview, { htmlFormatter, textFormatter } from 'remark-preview'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [
		preview(textFormatter({ length: 250, maxBlocks: 2 })),
		preview(
			htmlFormatter({
				length: 250,
				maxBlocks: 2,
			}),
			{
				attribute: 'previewHtml',
			}
		)
	],
	rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		alias: {
			// $plugins: path.resolve('./src/lib/articles/plugins'),
		},
		adapter: adapter(
			{
				// default options are shown
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: true
			}
		),
		prerender: {
			handleHttpError: 'warn'
		},
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},
};

export default config;
