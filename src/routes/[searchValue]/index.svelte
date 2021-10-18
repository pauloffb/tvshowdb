<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let searchResult = [];

	onMount(async () => {
		let searchTerm = $page.params.searchValue;
		const tvMazeSearch = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
		let res = await tvMazeSearch.json();
		searchResult = res;
		console.log(res);
	});
</script>

<div class="container mt-12">
	<h1 class="text-3xl text-center">
		Results for <span class="font-black">{$page.params.searchValue}</span>
	</h1>
	<ul class="grid grid-cols-5 gap-4 my-12">
		{#each searchResult as result}
			<li>
                <a href={`${$page.params.searchValue}/${result.show.id}`}>
                    <div class="card text-center shadow-2xl">
                        {#if result.show.image && result.show.image.medium}
                            <figure class="px-4 pt-4">
                                <img
                                    src={result.show.image.medium}
                                    class="rounded-lg object-contain"
                                    alt={result.show.name + ' cover image'}
                                />
                            </figure>
                        {:else}
                            <figure class="px-4 pt-4">
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 210 295"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xml:space="preserve"
                                    xmlns:serif="http://www.serif.com/"
                                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                                >
                                    <g transform="matrix(0.844771,-0.535128,0.535128,0.844771,-60.9291,130.859)">
                                        <text
                                            x="42.742px"
                                            y="114.581px"
                                            style="font-family:'Tahoma', sans-serif;font-size:38px;fill:rgb(192,192,192);"
                                            >NO IMAGE</text
                                        >
                                    </g>
                                </svg>
                            </figure>
                        {/if}
                        <div class="card-body px-4">
                            <h2 class="card-title">{result.show.name}</h2>
                            {#if result.show.summary}
                                <p class="prose-sm line-clamp-4">{@html result.show.summary}</p>
                            {/if}
                        </div>
                    </div>
                </a>
			</li>
		{/each}
	</ul>
</div>
