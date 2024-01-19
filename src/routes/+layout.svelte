<script>
	import '../app.css';
	import { description, keywords, title } from '$lib/meta';
</script>

<svelte:head>
	<link rel="“canonical”" href="" />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
</svelte:head>

<main class="container mx-auto">
	<slot />
</main>

<!--<style lang="postcss">-->
<!--    :global(body) {-->
<!--        @apply bg-blue-50;-->
<!--    }-->
<!--</style>-->

