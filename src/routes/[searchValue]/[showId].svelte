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
		let images = await fetch(`https://api.tvmaze.com/shows/${showId}/images`);
		images = await images.json();

		// See optional chaining https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
		showInfo.bgImage = images.filter(
			(image) => image.type === 'background'
		)[0]?.resolutions?.original?.url;
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
		<div class="hero min-h-screen rounded-xl">
			<button class="btn btn-sm btn-ghost loading">Loading...</button>
		</div>
	{:then showInfo}
		<div class="flex flex-col lg:flex-row  justify-between items-center">
			<div class="text-center lg:text-left">
				<h1 class="text-6xl font-bold flex-1">
					{showInfo.name}
				</h1>
				<ul class="space-x-1 mt-2">
					{#each showInfo.genres as genre}
						<li class="badge badge-outline badge-lg font-bold">{genre}</li>
					{/each}
				</ul>
			</div>
			<div class="flex flex-col items-center lg:items-end">
			{#if showInfo.rating.average}
				
					<div class="border  p-1 rounded-lg flex flex-col text-center w-16 mb-2">
						<div class="font-black text-lg">{showInfo.rating.average}</div>
						<span class="text-xs font-medium">Avg. Rating</span>
					</div>
					
				
			{/if}
			{#if showInfo.status == 'Ended'}
						<div class="badge badge-lg badge-error font-bold">
							{showInfo.status} ({parseInt(showInfo.premiered)}-{parseInt(showInfo.ended)})
						</div>
					{:else}
						<div class="badge badge-lg badge-accent font-bold">
							{showInfo.status} since {parseInt(showInfo.premiered)}
						</div>
					{/if}
		</div>
	</div>
		<div class="hero rounded-xl mt-4 bg-cover bg-no-repeat" style="background-image: url({showInfo.bgImage});">
			<div class="{showInfo.bgImage ? 'hero-overlay bg-opacity-70' : ''} rounded-xl">
				<div
					class="flex-col hero-content text-neutral-content lg:flex-row-reverse mx-auto justify-around"
				>
					<img
						src={showInfo.image.original}
						class="max-w-sm rounded-lg shadow-2xl"
						alt="{showInfo.name} cover"
					/>
					<div>
						<div class="flex mb-5" />

						<p class="mb-5 prose mr-0 lg:mr-10 lg:mt-8 {showInfo.bgImage ? '' : 'text-neutral'}">
							{@html showInfo.summary}
						</p>
						<!-- <button class="btn btn-neutral">More info</button> -->
					</div>
				</div>
			</div>
		</div>
	{/await}
</div>
