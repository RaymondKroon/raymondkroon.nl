<script lang="ts">
	export let tags: string[] = [];
</script>

<div class="flex flex-row gap-1">
{#each tags as tag, i}
	{#if i > 0} <span> ·</span> {/if}
	<span>{tag}</span>
{/each}
</div>