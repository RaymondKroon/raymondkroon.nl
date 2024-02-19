<script lang="ts">
	import SectionTitle from '$lib/resume/SectionTitle.svelte';
	import type { WorkExperience } from '$lib/resume/api';
	import Icon from '$lib/Icon.svelte';


	const paths = import.meta.glob('/data/resume/experience/*.md', { eager: true });
	const experience: WorkExperience[] = [];

	for (const path in paths) {
		const file = paths[path] as any;
		experience.push({ ...file.metadata, description: file.default });
	}

	experience.reverse();


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

<article
	class="container max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 print:grid-cols-3
	gap-10 font-mono p-10 print:p-0 rounded-2xl my-20s screen:bg-off-white screen:drop-shadow-[0_10px_10px_rgba(0,0,0,.7)]">

	<section class="col-span-full flex justify-evenly">
		<div class="border-2 border-theme-2 px-20 py-6 mb-6">
			<h1 class="text-4xl font-semibold uppercase justify-center">Raymond Kroon</h1><s></s>
			<h5 class="text-xl text-theme-4">Software architect, team lead, designer</h5>
		</div>
	</section>
	<section
		class="col-span-1 md:col-span-2 print:col-span-2 md:row-span-4 print:row-span-4 row-start-4 md:row-start-2 print:row-start-2">
		<SectionTitle>Employment history</SectionTitle>
		{#each experience as entry, i}
			<div class="experience flex flex-row break-inside-avoid">
				<div class="timeline flex flex-col items-center py-1.5 mr-5 text-theme-2">
					<div class="w-[16px]" class:current={entry.current}>
						<Icon name="circle" />
					</div>
					<div class="text-sm -mt-1">{entry.period.split(' ')[1]}</div>
					{#if i < experience.length - 1}
						<div class="line grow border-theme-2 border-dashed border-l-2" />
					{/if}
				</div>
				<div class="content mb-3">
					<div class="title mb-1">
						<span class="block text-xl font-semibold text-theme-4">{entry.jobTitle}</span>
						<div class="text-sm text-gray-500 print:text-gray-400">{entry.company} |  {entry.period}</div>
					</div>

					{#if entry.description !== ''}
						<div class="description">
							<svelte:component this={entry.description} />
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</section>
	<div class="flex flex-col">
		<section class="about">
			<SectionTitle>About</SectionTitle>
			<p class="text-justify">
				I am a software architect and leader. I am an analytical thinker who loves a challenge.
				I love quality and enjoy seeing and creating elegant solutions. My top skills are:
				modeling complex problems, thinking in concepts, building and improving teams.
			</p>
		</section>
		<section class="skills">
			<SectionTitle>Skills</SectionTitle>
			<div class="text-sm">
				{#each ["Grasping new concepts quickly", "Agile software development", "CI/CD", "Domain Driven Design", "Process design",
					"Leadership", "GitOps", "Machine Learning", "Artificial Intelligence"].sort() as skill}
				<span class=" mr-1.5 screen:mb-1 p-0.5 inline-block">
					{skill}
				</span>
				{/each}
			</div>
			<div class="text-sm">
				{#each ["Kubernetes", "Tekton", "OpenShift", "Golang", "Rust", "Python", "JVM Based languages", "Typescript", "Linux", "Temporal (workflows)",
					"Microsoft Azure"].sort() as skill}
				<span class=" mr-1 screen:mb-1 p-0.5 inline-block">
					{skill}
				</span>
				{/each}
			</div>
		</section>
		<section class="languages break-inside-avoid">
			<SectionTitle>Languages</SectionTitle>
			<ul>
				<li>Dutch</li>
				<li>English</li>
			</ul>
		</section>
		<section class="education break-inside-avoid">
			<SectionTitle>Education</SectionTitle>
			{#each education as entry}
				<div class="education-entry mb-3">
					<div class="title mb-1">
						<span class="block font-semibold text-theme-4">{entry.name}</span>
						<small class="text-gray-500 print:text-gray-400">
							{#if entry.where}{entry.where} | {/if}{entry.period}</small>
					</div>
				</div>
			{/each}
		</section>
	</div>
</article>

<style lang="postcss">
    :global(.description > p) {
        @apply text-justify py-1.5;
    }

    :global(svg) {
        @apply text-theme-2;
    }

    .current :global(svg) {
        padding: 2px;
        background: white;
        border: 1px solid;
        border-radius: 50%;
        @apply border-theme-2 fill-theme-2;
    }

    @page {
        padding: 0;
        margin: 1cm 1cm 1cm 1cm;
        size: A4 portrait;
    }

    @page :first {
        margin: 0cm 1cm 1cm 1cm;
    }

</style>
