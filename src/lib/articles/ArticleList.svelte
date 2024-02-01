<script lang="ts">
	import { type Article, getArticles } from '$lib/articles/api';
	import { onMount } from 'svelte';
	import ArticleMetadata from '$lib/articles/ArticleMetadata.svelte';

	let articles: Article[] = [];

	onMount(async () => {
			articles = await getArticles();
	});

</script>

<div class="flex-grow">
{#each articles as article}
	<div>
		<div class="text-theme-4 text-xl font-bold mb-1"><a href="articles/{article.slug}">{article.title}</a></div>
		<ArticleMetadata article="{article}" />
		{@html article.previewHtml}
	</div>
{/each}
</div>