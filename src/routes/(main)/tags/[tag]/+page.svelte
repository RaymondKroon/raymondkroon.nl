<script lang="ts">
	import ArticleList from '$lib/articles/ArticleList.svelte';

	export let data: any;
</script>
<h1 class="mb-2">Articles about {data.tag} </h1>
<ArticleList articles="{data.articles}"/>
