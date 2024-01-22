<script lang="ts">
	import SectionTitle from '$lib/resume/SectionTitle.svelte';
	import type { WorkExperience } from '$lib/resume/api';
	import Icon from '$lib/Icon.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: {
		experience: WorkExperience[];
	};

	let { experience } = data;

	let education = [
		{
			name: 'Inspirational leadership',
			where: null,
			period: '2015'
		},
		{
			name: 'Matrix Management',
			where: 'Krauthammer',
			period: '2008 - 2009'
		},
		{
			name: 'Prince2 Foundation',
			where: null,
			period: '2008'
		},
		{
			name: 'MSc Applied Mathematics',
			where: 'University of Twente',
			period: '2000 - 2006'
		}
	];

</script>


<svelte:head>
	<title>Raymond Kroon - Resume</title>
</svelte:head>

<article class="container max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 font-mono p-10 bg-white rounded-2xl my-20">

	<section class="col-span-full flex justify-evenly">
		<div class="border-2 border-black px-20 py-6 mb-6">
			<h1 class="text-4xl font-semibold uppercase justify-center">Raymond Kroon</h1><s></s>
			<h5 class="text-xl">Software architect, team lead, designer</h5>
		</div>
	</section>
	<section class="col-span-1 md:col-span-2 md:row-span-3 row-start-4 md:row-start-2">
		<SectionTitle>Employment history</SectionTitle>
		{#each experience as entry}
			<div class="experience mb-3">
				<div class="title mb-1">
					<span class="block text-xl font-semibold">{entry.jobTitle}</span>
					<small class="text-gray-500">{entry.company} |
						<Icon name="map-pin" /> {entry.location}</small>
				</div>

				{#if entry.description !== ''}
					<div class="description">
						<SvelteMarkdown source="{entry.description}" />
					</div>
				{/if}
			</div>
		{/each}
	</section>

	<section class="about">
		<SectionTitle>About</SectionTitle>
		<p>
			I am a software architect and leader. I am an analytical thinker who loves a challenge.
			I love quality and enjoy seeing and creating elegant solutions. My top skills are:
			modeling complex problems, thinking in concepts, building / improving teams. I
			have a helicopter view and try to keep an open mind towards everything. I am
			ambitious, however, the road to perfect has to be pragmatic.
		</p>
	</section>
	<section class="skills">
		<SectionTitle>Skills</SectionTitle>
		<!--		<Skills />-->
	</section>
	<section class="education">
		<SectionTitle>Education</SectionTitle>
		{#each education as entry}
			<div class="education-entry mb-3">
				<div class="title mb-1">
					<span class="block font-semibold">{entry.name}</span>
					<small class="text-gray-500">
						{#if entry.where}{entry.where} |{/if}{entry.period}</small>
				</div>
			</div>
		{/each}
	</section>
</article>

<style lang="postcss">
    :global(.description > p) {
        @apply text-justify py-1.5;
    }
</style>