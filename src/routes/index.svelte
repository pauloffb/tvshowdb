<script>
	import {goto} from '$app/navigation';

	let searchValue = '';
	function search () {
		goto(`${searchValue}`)
	}
</script>
<section class="w-full flex flex-col items-center justify-center h-full">
<h1 class="text-4xl lg:text-5xl font-black text-center">Search TV Show</h1>

	<div class="form-control mt-20 w-full max-w-lg">
		<div class="relative">
			<input
				bind:value={searchValue}
				type="text"
				placeholder="Search for TVShow name"
				class="w-full pr-16 input input-primary input-bordered border-neutral"
			/>
			<button class="absolute top-0 right-0 rounded-l-none btn btn-neutral" on:click={search}>go</button>
		</div>
	</div>
</section>
