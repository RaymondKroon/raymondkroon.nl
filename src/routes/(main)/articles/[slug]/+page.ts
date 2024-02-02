import { error } from '@sveltejs/kit'
import { articles, getArticle } from '$lib/articles/api';

export async function load({ params }) {
	try {
		let article = await getArticle(params.slug);
		return article;

	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}

export async function entries() {
	let entries = articles.map(a =>  ({slug: a.slug}))
	return entries;
}