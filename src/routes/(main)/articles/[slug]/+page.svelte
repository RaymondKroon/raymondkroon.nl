<script lang="ts">
	import ArticleMetadata from '$lib/articles/ArticleMetadata.svelte';

	export let data;
</script>


<article>
	<header class="mb-5">
		<div class="text-theme-4 text-3xl font-bold mb-1">{data.meta.title}</div>
		<ArticleMetadata article="{data.meta}" />
	</header>
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>