import { articles } from '$lib/articles/api';


export async function load() {
	return { articles };
}