<script>
	import '../app.css';
	import { description, keywords, title } from '$lib/meta';
	// import Disco from '$lib/backgrounds/Disco.svelte';
	import StaticDisco from '$lib/backgrounds/StaticDisco.svelte';
</script>

<svelte:head>
	<link rel="“canonical”" href="" />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
</svelte:head>

<StaticDisco />

<main class="container mx-auto screen:drop-shadow-[0_10px_10px_rgba(0,0,0,.5)]">
	<slot />
</main>

<!--<style lang="postcss">-->
<!--    :global(body) {-->
<!--        @apply bg-blue-50;-->
<!--    }-->
<!--</style>-->

