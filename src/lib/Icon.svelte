<script lang="ts">

	export let name: string;
	let icon: any;

	import(`./icons/${name}.svelte`).then((module) => {
		icon = module.default;
	});

</script>

<span class="inline-block"><svelte:component this="{icon}" /></span>