import { error } from '@sveltejs/kit';

export type Categories = string

export type Article = {
	title: string
	slug: string
	date: string
	categories: Categories[]
	published: boolean
	preview: string,
	previewHtml: string
}

export async function getArticles(): Promise<Article[]> {
	let articles: Article[] = []

	const paths = import.meta.glob('/data/articles/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path] as any;
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Article, 'slug'>
			const post = { ...metadata, slug } satisfies Article
			post.published && articles.push(post)
		}
	}

	articles = articles.sort((first, second) =>
		new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return articles
}

export async function getArticle(slug: string): Promise< { meta:Article, content: any }> {
		const post = await import(`../../../data/articles/${slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
}