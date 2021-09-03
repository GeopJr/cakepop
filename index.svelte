<script>
	// index.svelte has to be as self-contained as possible
	// so users can easily remove it

	import Typewriter from 'svelte-typewriter';
	import Config from '$lib/SveltePress/sveltePress.config';

	import ArrowRight32 from 'carbon-icons-svelte/lib/ArrowRight32';
	import ArrowDown32 from 'carbon-icons-svelte/lib/ArrowDown32';

	import { session } from '$app/stores';

	$: nav = Config.nav.overwrite
		? Config.nav.items || []
		: $session.get('navbar').concat(Config.nav.items || []);

	let currentYear = new Date().getFullYear();

	// Typewriter
	let people = ['humans', 'you', 'your relatives', 'everyone'];

	// Logo animation
	import { draw } from 'svelte/transition';

	let duration = 4000;
	let delay = 200;
	let condition = false;
	let finished = false;

	setTimeout(() => (condition = true));
	setTimeout(() => {
		finished = true;
	}, duration - 200); // Fill colors a bit earlier
</script>

<svelte:head>
	<meta name="og:title" content={Config.title} />
	<title>{Config.title}</title>
</svelte:head>

<div class="-mt-18">
	<div class="hero min-h-screen bg-base-100">
		<div class="text-center hero-content">
			<div class="max-w-md flex flex-col justify-center items-center">
				<svg
					shape-rendering="auto"
					width="250"
					height="250"
					viewBox="0 0 1000 1000"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<filter id="null">
							<feBlend mode="normal" in="SourceGraphic" />
						</filter>
					</defs>
					<g filter="url(#null)">
						{#if condition}
							<path
								class:filled-1={finished}
								in:draw={{ duration, delay }}
								d="M250 250v250h500v250H0v150a100 100 0 00100 100h800a100 100 0 00100-100V250H250z"
								fill="#ffd0bf"
							/><path
								class:filled-2={finished}
								in:draw={{ duration, delay }}
								d="M100 0A100 100 0 000 100v650h750V500H250V250h750V100A100 100 0 00900 0H100z"
								fill="#ff3e00"
							/>
						{/if}
					</g>
				</svg>
				<h1 class="my-5 text-4xl font-bold">Welcome to SveltePress</h1>
				<p class="mb-5 flex flex-row justify-center">
					Documentation for 
					<Typewriter loop={3000} cursor="#ff3e00">
						{#each people as person}
							<span>{person}.</span>
						{/each}
						{' '}
					</Typewriter>
				</p>
				<a
					class="btn btn-primary flex flex-row justify-between"
					href={nav.length > 0 ? nav[0].link : $session.get('navbar')[0]?.link}
					><span>Let's get started</span><ArrowRight32 /></a
				>
			</div>
		</div>
		<ArrowDown32 class="animate-bounce w-12 h-12 self-end" />
	</div>
	<div class="flex flex-col justify-between bg-neutral-focus py-4 md:flex-row">
		<div class="card shadow m-4">
			<div class="card-body">
				<h2 class="card-title">Powered by SvelteKit</h2>
				<p>
					SveltePress is built on top of SvelteKit, a powerful web framework, while taking advantage
					of Svelte's incredible performance and simplicity.
				</p>
			</div>
		</div>
		<div class="card shadow m-4">
			<div class="card-body">
				<h2 class="card-title">Made for humans</h2>
				<p>
					Markdown files are structured according to the filesystem, shrinking the gap between File
					Manager and content creator.
				</p>
			</div>
		</div>
		<div class="card shadow m-4">
			<div class="card-body">
				<h2 class="card-title">Customizability</h2>
				<p>
					Replacable themes, markdown converters, components, pages, functions... SveltePress was
					made for you.
				</p>
			</div>
		</div>
	</div>
	<div class="flex h-full w-full flex-col justify-between p-8">
		<div class="flex flex-col md:flex-row justify-around my-4">
			<div class="max-w-full flex justify-center flex-0">
				<img
					class="max-w-full"
					alt="a terminal showing the output of the tree command, output includes a file structure of markdown files and SveltePress sidebar generated using the previous structure"
					src="https://i.imgur.com/KidDqUy.png"
				/>
			</div>
			<div class="self-center card shadow-2xl bg-primary flex justify-center m-4 max-w-150">
				<div class="card-body">
					<h2 class="card-title">Filesystem based Structure</h2>
					<p>Folders become categories, files become posts. Simple as that.</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col-reverse md:flex-row justify-around my-4">
			<div class="self-center card shadow-2xl m-4 mb-8 bg-secondary text-black m-4 max-w-150">
				<div class="card-body">
					<h2 class="card-title">Themable</h2>
					<p>
						With a theming API with almost zero restrictions, you can modify everything to fit your
						needs.
					</p>
				</div>
			</div>
			<div class="max-w-3xl flex justify-center flex-0">
				<img
					class="max-w-full"
					alt="the cakepop official theme in front of the carbon one"
					src="https://i.imgur.com/SG5iPrc.png"
				/>
			</div>
		</div>
		<div class="flex flex-col md:flex-row justify-around my-4">
			<div class="max-w-3xl flex justify-center m-4">
				<img
					alt="screenshots of multiple guis of sveltepress (gtk, qt, flutter (desktop &amp; mobile)"
					src="https://i.imgur.com/YCuLvMP.png"
				/>
			</div>
			<div class="self-center card shadow-2xl m-4 mb-8 bg-primary m-4 max-w-150">
				<div class="card-body">
					<h2 class="card-title">Compile to native</h2>
					<p>
						Desktop, Mobile, e-books &amp; more. With the power of Flutter, GTK, QT &amp; Pandoc you can
						target Web, Linux, MacOS, Windows, Andoird, iOS, .epub, .pdf, .docx &amp; a whole lot more
						from one codebase.
					</p>
				</div>
			</div>
		</div>
	</div>

	<footer class="p-4 footer bg-base-300 text-base-content footer-center">
		<div class="flex flex-row">
			<span class="pd" /> 2021{currentYear === 2021 ? '' : ' - ' + currentYear} -
			<a class="sp--link" href="https://geopjr.dev/">GeopJr</a>
		</div>
	</footer>
</div>

<style>
	.pd {
		display: inline-flex;
		width: 18px;
		height: 18px;
		vertical-align: middle;
		text-align: center;
		justify-content: center;
	}

	.pd::after {
		content: '🚫';
		display: block;
		position: absolute;
		font-size: 100%;
	}
	.pd::before {
		content: '\00a9';
		display: block;
		position: absolute;
		font-size: 100%;
	}

	footer {
		font-weight: bold;
		text-align: center;
		padding: 0 2rem 2rem;
	}

	path {
		stroke: black;
		fill: white;
		transition: 1.5s;
		stroke-width: 15;
	}
	path.filled-1 {
		stroke: unset;
		fill: #ffd0bf;
	}
	path.filled-2 {
		stroke: unset;
		fill: #ff3e00;
	}
</style>
