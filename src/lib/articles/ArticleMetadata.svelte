<script lang="ts">
	import { formatDate } from '$lib/formatting.js';
	import Tags from '$lib/articles/Tags.svelte';
	import type { Article } from '$lib/articles/api';

	export let article: Article;

</script>

<div class="text-theme-4 text-sm mb-2 flex flex-row gap-4">
	<div>{formatDate(article.date)}</div>
	<Tags tags={article.categories} />
</div>