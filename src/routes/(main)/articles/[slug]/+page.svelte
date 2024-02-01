<script lang="ts">
	import { formatDate } from '$lib/formatting';
	import ArticleMetadata from '$lib/articles/ArticleMetadata.svelte';

	export let data
</script>


<div>
	<div class="text-theme-4 text-3xl font-bold mb-1">{data.meta.title}</div>
	<ArticleMetadata article="{data.meta}" />
	<svelte:component this={data.content} />
</div>