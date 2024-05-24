<script lang="ts">
	import { onMount } from 'svelte';

	let lines: { class: string }[] = [];
	const lineWidth = 30;
	let totalLines = 0;
	let linesWidth = 0;
	let screenWidth = 0;
	let documentHeight = 0;

	function generateBg() {
		screenWidth = window.innerWidth;
		documentHeight = document.documentElement.scrollHeight;

		linesWidth = Math.min(990, screenWidth - 60);
		totalLines = Math.floor(linesWidth / lineWidth);
		totalLines = totalLines - (totalLines % 8) + 1;
		linesWidth = totalLines * lineWidth;

		let colors = [
			'fill-theme-1',
			'fill-theme-2',
			'fill-theme-3',
			'fill-theme-4',
			'fill-theme-5',
		];

		colors = colors.concat(colors.slice(1,4).reverse());

		lines = Array(totalLines).fill(0).map((_, i) => ({ class: colors[i % colors.length] }));
	}

	onMount(() => {generateBg()});
</script>

<style>
    svg {
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    @media print {
        svg {
            display: none;
        }
    }

</style>

<svelte:window on:resize="{generateBg}" />

<svg class="mx-auto" width="{linesWidth}" height="{documentHeight}">
	{#each lines as line, i}
		<rect class={line.class} x={i * lineWidth} y="0" width={lineWidth} height="{documentHeight}" />
	{/each}
</svg>