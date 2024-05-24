<script>
	import '../app.css';
	import { description, keywords, title } from '$lib/config';
	// import StaticDisco from '$lib/backgrounds/StaticDisco.svelte';
	import Stripes from '$lib/backgrounds/Stripes.svelte';
</script>

<svelte:head>
	<link rel="“canonical”" href="" />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
</svelte:head>

<body class="mx-auto m-10 bg-theme-4">

<Stripes/>

<div class="">
	<slot />
</div>
</body>

<!--<style lang="postcss">-->
<!--    :global(body) {-->
<!--        @apply bg-blue-50;-->
<!--    }-->
<!--</style>-->

