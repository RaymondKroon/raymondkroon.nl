<script lang="ts">
	import { type Article } from '$lib/articles/api';
	import ArticleMetadata from '$lib/articles/ArticleMetadata.svelte';

	export let articles: Article[] = [];

</script>

<div class="flex-grow">
{#each articles as article}
	<div>
		<div class="text-theme-4 text-xl font-bold mb-1"><a href="/articles/{article.slug}">{article.title}</a></div>
		<ArticleMetadata article="{article}" />
		{@html article.previewHtml}
	</div>
{/each}
</div>