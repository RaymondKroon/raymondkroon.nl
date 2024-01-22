<script lang="ts">
	import { onMount } from 'svelte';

	let squares: any[] = [];
	const squareSize = 50; // Size of each square in pixels
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

		squares = Array(totalSquares).fill(0).map((_, i) => i);
	});
</script>

<style>
    .square {
        animation: colorchange 30s infinite alternate;
    }

    :root {
        --start-color: #87cefa; /* sky blue */
    }

    @keyframes colorchange {
        0% {
            fill: var(--start-color);
        }
        25% {
            fill: #b0c4de;
        }
        /* Light Steel Blue */
        50% {
            fill: #4682b4;
        }
        /* Steel Blue */
        75% {
            fill: #87ceeb;
        }
        /* Sky Blue */
        100% {
            fill: var(--start-color);
        }
        /* Blue */
    }

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
	{#each squares as _, i}
		<rect class="square" style="animation-delay: {Math.random()*5}s" x={(i % squaresWidth) * squareSize}
					y={Math.floor(i / squaresWidth) * squareSize} width={squareSize} height={squareSize}
					fill="var(--start-color)" />
	{/each}
</svg>