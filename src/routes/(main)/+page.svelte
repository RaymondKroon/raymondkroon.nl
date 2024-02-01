<script>
	import ArticleList from '$lib/articles/ArticleList.svelte';

	export let data;
</script>

<ArticleList articles="{data.articles}"/>
