<script>
	import { page } from '$app/stores';

	import { getName, getUrl } from '$lib/SveltePress/components/sidebar';

	export let isSideNavOpen;
	export let groupMap;
</script>

<div
	class={`-mt-16 fixed overflow-none h-screen w-screen z-5 lg:hidden ${
		isSideNavOpen ? 'bg-black bg-opacity-50 flex' : 'hidden'
	}`}
	on:click={() => (isSideNavOpen = false)}
/>
<nav
	class={`sp--sidebar z-10 transition duration-150 ease-in-out transform  lg:translate-x-0 lg:visible fixed left-0 h-full sidebar motion-reduce:transition-none motion-reduce:transform-none ${
		isSideNavOpen ? 'rounded-l-none visible translate-x-0' : '-translate-x-full'
	}`}
>
	<ul
		class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content compact h-full rounded-box"
	>
		{#each groupMap as [, valueP], i}
			{#if i === 0}
				<li>
					<span class="menu-title text-lg font-bold -mb-4">{getName(valueP)}</span>
				</li>
				{#if valueP && [...valueP.files].length > 0}
					<div class="divider" />
					{#each [...valueP.files] as [key, value]}
						<li>
							<a
								sveltekit:prefetch
								href={getUrl(key, value)}
								class:active={'/' + Object.values($page.params).join('/') === getUrl(key, value)}
								>{getName(value)}</a
							>
						</li>
					{/each}
				{/if}
			{:else}
				<li>
					<span class="menu-title text-lg font-bold">{getName(valueP)}</span>
					<div class="bg-transparent cursor-default">
						<ul class="menu w-full">
							{#each [...valueP.files] as [key, value]}
								<li>
									<a
										sveltekit:prefetch
										href={getUrl(key, value)}
										class:active={'/' + Object.values($page.params).join('/') ===
											getUrl(key, value)}>{getName(value)}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</li>
			{/if}
			{#if i !== groupMap.length - 1}
				<div class="divider" />
			{/if}
		{/each}
	</ul>
</nav>

<style>
	.sidebar {
		height: calc(100% - 64px - 16px);
	}
</style>
