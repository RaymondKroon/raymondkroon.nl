<script lang="ts">
	import { onMount } from 'svelte';

	let lines: { class: string }[] = [];
	const lineWidth = 100;
	let totalLines = 0;
	let linesWidth = 0;
	let documentHeight = 0;

	function generateBg() {
		const screenWidth = window.innerWidth;
		documentHeight = document.documentElement.scrollHeight;

		linesWidth = Math.ceil(screenWidth / lineWidth);

		totalLines = linesWidth;

		const colors = [
			'fill-theme-1',
			'fill-theme-2',
			'fill-theme-3',
			'fill-theme-4',
			'fill-theme-5'

		];
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

<svg width="100%" height="{documentHeight}">
	{#each lines as line, i}
		<rect class={line.class} x={i * lineWidth} y="0" width={lineWidth} height="{documentHeight}" />
	{/each}
</svg>