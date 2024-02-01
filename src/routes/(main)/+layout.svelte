<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="container flex flex-col max-w-screen-lg mx-auto p-10 rounded-2xl my-20s screen:bg-off-white screen:drop-shadow-[0_10px_10px_rgba(0,0,0,.7)]">
	<Header />
	<slot></slot>
	<Footer />
</div>