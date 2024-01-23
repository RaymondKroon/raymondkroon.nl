<script lang="ts">
	import { onMount } from 'svelte';

	let squares: { class: string }[] = [];
	const squareSize = 100; // Size of each square in pixels
	let totalSquares = 0;
	let squaresWidth = 0;
	let squaresHeight = 0;
	let documentHeight = 0;

	onMount(() => {
		const screenWidth = window.innerWidth;
		documentHeight = document.documentElement.scrollHeight;

		squaresHeight = Math.ceil(documentHeight / squareSize);
		squaresWidth = Math.ceil(screenWidth / squareSize);

		totalSquares = squaresWidth * squaresHeight;

		const colors = ['fill-theme-1 opacity-50',
			'fill-theme-2 opacity-50',
			'fill-theme-3 opacity-50',
			'fill-theme-4 opacity-50',
			'fill-theme-5 opacity-50',

		];
		squares = Array(totalSquares).fill(0).map((_, i) => ({ class: colors[i % colors.length] }));
	});
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

<svg width="100%" height="{documentHeight}">
	{#each squares as square, i}
		<rect class={square.class} x={(i % squaresWidth) * squareSize}
					y={Math.floor(i / squaresWidth) * squareSize} width={squareSize} height={squareSize} />
	{/each}
</svg>