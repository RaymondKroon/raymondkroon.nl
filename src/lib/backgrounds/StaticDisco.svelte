<script lang="ts">
 import { onMount } from 'svelte';

 let squares: {color: string}[] = [];
 const squareSize = 75; // Size of each square in pixels
 let totalSquares = 0;
 let squaresWidth = 0;
 let squaresHeight = 0;
 let documentHeight = 0;

 const baseColor = { h: 200, s: 100, l: 0 }; // Base color in HSL format

function getRandomColor() {
  const hueVariation = Math.floor(Math.random() * 30) - 15; // Hue variation range: -15 to 15
  const hue = baseColor.h + hueVariation;
  const lightness = Math.max(baseColor.l, 70); // Ensure the lightness never goes below 30
  return `hsl(${hue}, ${baseColor.s}%, ${lightness}%)`;
}

 onMount(() => {
  const screenWidth = window.innerWidth;
  documentHeight = document.documentElement.scrollHeight;

  squaresHeight = Math.ceil(documentHeight / squareSize);
  squaresWidth = Math.ceil(screenWidth / squareSize);

  totalSquares = squaresWidth * squaresHeight;

  squares = Array(totalSquares).fill(0).map(() => ({ color: getRandomColor() }));
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
  <rect class="square" x={(i % squaresWidth) * squareSize}
     y={Math.floor(i / squaresWidth) * squareSize} width={squareSize} height={squareSize}
     fill="{square.color}" />
 {/each}
</svg>