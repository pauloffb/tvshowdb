<script>
	import '../tailwind.css';
	import logo from '../../static/pb-logo.png';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	onMount(async () => {
		themeChange(false);
	});
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
	<div class="flex-none px-2 mx-2">
    <a class="text-lg font-bold" href="/">TVShow DB</a>
		<span class="">  </span>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="items-stretch hidden lg:flex">

		</div>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
				/>
			</svg>
		</button>
	</div>
	<div class="flex-none">
		<button
			class="btn btn-square btn-ghost"
			data-toggle-theme="dark,light"
			data-act-class="ACTIVECLASS"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
		</button>
	</div>
</div>
<div class="w-full h-screen flex flex-col">
	<div class="flex-grow flex flex-col items-center p-2">
		<slot />
	</div>

	<footer class="p-10 footer bg-neutral text-primary-content footer-center">
		<div>
			<a href="https://paulobaptista.dev" target="_blank">
				<img
					class="h-14 transition delay-150 duration-300 ease-in-out -rotate-6 hover:rotate-0 shadow-lg"
					src={logo}
					alt="Paulo Baptista logo"
				/>
			</a>
			<p class="font-bold text-xl">
				Paulo Baptista
				<br /><span class="text-base font-normal"
					>This is a demo project showcasing Sveltekit + Tailwind + DaisyUI + TVMaze API. Use
					responsibly.</span
				>
			</p>
			<p>Copyright © 2021 - All right reserved</p>
		</div>
		<div>
			<div class="grid grid-flow-col gap-4">
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
					>
						<path
							d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
						/>
					</svg>
				</a>
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
					>
						<path
							d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
						/>
					</svg>
				</a>
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
					>
						<path
							d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</footer>
</div>
