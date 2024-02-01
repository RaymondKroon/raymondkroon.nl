import { error } from '@sveltejs/kit'
import { getArticle, getArticles } from '$lib/articles/api';

export async function load({ params }) {
	try {
		let article = await getArticle(params.slug);
		return article;

	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}

export async function entries() {
	let entries = (await getArticles()).map(a =>  ({slug: a.slug}))
	console.log(entries);
	return entries;
}