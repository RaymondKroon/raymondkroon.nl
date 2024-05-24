<script lang="ts">
	import ArticleMetadata from '$lib/articles/ArticleMetadata.svelte';

	export let data;
</script>


<article>
	<header class="mb-5">
		<h1 class="mb-1">{data.meta.title}</h1>
		<ArticleMetadata article="{data.meta}" />
	</header>
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>