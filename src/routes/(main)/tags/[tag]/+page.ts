import { articles, tags } from '$lib/articles/api';
import { error } from '@sveltejs/kit';


export async function load({ params }) {
	try {
		let articlesWithTag = articles.filter(a => a.tags.includes(params.tag));
		return { tag: params.tag, articles: articlesWithTag };

	} catch (e) {
		throw error(404, `Could not find ${params.tag}`)
	}
}

/* Not needed, because of crawling from the main pages
* */
// export async function entries() {
// 	return tags.map(tag => ({tag: tag}));
// }