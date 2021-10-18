<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	async function getShowInfo() {
		let showId = $page.params.showId;
		const tvMazeSearch = await fetch(`https://api.tvmaze.com/shows/${showId}`);
		let showInfo = await tvMazeSearch.json();
		let seasons = await fetch(`https://api.tvmaze.com/shows/${showId}/seasons`);
		showInfo.seasons = await seasons.json();
		console.log(showInfo);
		return showInfo;
	}

	let promise = getShowInfo();

	onMount(async () => {
		promise = getShowInfo();
	});
</script>

<div class="container my-12">
	{#await promise}
		<div class="hero min-h-screen  rounded-xl">
			<button class="btn btn-sm btn-ghost loading">Loading...</button>
		</div>
	{:then showInfo}
		<div class="hero rounded-xl">
			<div class="flex-col hero-content lg:flex-row-reverse">
				<img src={showInfo.image.original} class="max-w-sm rounded-lg shadow-2xl" />
				<div>
					<h1 class="mb-5 text-6xl font-bold max-w-lg">
						{showInfo.name}
					</h1>
					<ul class="space-x-1">
						{#if showInfo.status == 'Ended'}
							<div class="badge badge-lg badge-error font-bold">
								{showInfo.status} ({parseInt(showInfo.premiered)}-{parseInt(showInfo.ended)})
							</div>
						{:else}
							<div class="badge badge-lg badge-accent font-bold">
								{showInfo.status} since {parseInt(showInfo.premiered)}
							</div>
						{/if}
						{#each showInfo.genres as genre}
							<li class="badge badge-outline badge-lg font-bold">{genre}</li>
						{/each}
					</ul>

					<p class="mb-5 prose mr-0 lg:mr-10 lg:mt-8">
						{@html showInfo.summary}
					</p>
					<button class="btn btn-neutral">More info</button>
				</div>
			</div>
		</div>
	{/await}
</div>
