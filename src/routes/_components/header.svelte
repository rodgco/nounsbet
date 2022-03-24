<script lang="ts">
	import { onMount } from 'svelte';
	import nounsToken from '$lib/token';

	let opener: HTMLElement;

	onMount(() => {
		document.addEventListener('keydown', (event: KeyboardEvent) => {
			if (event.key === 'Escape') opener.blur();
		});
		opener.addEventListener('touchstart', () => opener.focus());
		// opener.nextElementSibling.addEventListener('touchstart', () => opener.blur());
	});
</script>

<header id="top">
	<div id="logo"><a href="/"><img src="/bet.svg" /></a></div>
	<button type="button" id="mainMenuOpen" hidden bind:this={opener} />
	<nav>
		<slot name="nav">
			<ul>
				<li><a href="#">Entry</a></li>
			</ul>
		</slot>
	</nav>
</header>

<style>
	header {
		padding: 0.5rem 1rem;
		flex-grow: 0;
		display: flex;
		align-items: center;
	}
	#logo ~ * {
		flex-grow: 0;
	}
	#logo img {
		padding: 0;
		height: 3rem;
	}
	header :global(a) {
		display: inline-block;
		text-decoration: none;
		color: var(--color-flowText);
	}
	header nav {
		padding: 0;
	}
	header :global(li) {
		display: inline;
		list-style: none;
		margin-left: 0.75em;
	}
	header :global(li :first-child) {
		display: inline-flex;
		align-items: center;
		font-size: 0.9rem;
		font-weight: 700;
		border: var(--border-hairline);
		border-radius: 10px;
		padding: 0 0.75rem;
		height: 2.5rem;
		transition: background-color 0.3s;
	}
	header :global(li :first-child:focus),
	header :global(li :first-child:hover) {
		background-color: var(--color-featured-bg);
	}
	header :global(li button:focus-visible) {
		outline: -webkit-focus-ring-color auto 1px;
		box-shadow: none;
	}
	header :global(li :first-child.info) {
		background-color: var(--color-featured-bg);
	}
	#mainMenuOpen + nav :global(ul:after) {
		top: 0.88rem;
		right: 0.85rem;
		width: 1.5rem;
		height: 1.5rem;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'%3E%3Cpath fill='%23800' d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'%3E%3C/path%3E%3C/svg%3E")
			center center no-repeat;
		background-size: cover;
	}
	#mainMenuOpen + nav :global(ul:before) {
		font-size: 1.5rem;
		padding: 0.5rem 1rem;
		background: var(--color-chrome-bg);
		border-bottom: 1px solid var(--color-shadow);
	}
	@media (max-width: 48rem) {
		#mainMenuOpen {
			display: block;
			flex-grow: 0;
			line-height: 1;
			width: 1.5em;
			height: 1.5em;
			border: 0;
			background: transparent
				url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='black' d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'%3E%3C/path%3E%3C/svg%3E")
				center center no-repeat;
			background-size: 1.8em 1.8em;
		}
		#mainMenuOpen + nav {
			position: fixed;
			top: 0;
			left: -100%;
			width: 100%;
			height: 100%;
			overflow: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 0;
			background: var(--color-modal-fader);
			transition: left 0s 0.5s, opacity 0.5s;
		}
		#mainMenuOpen:focus + nav,
		#mainMenuOpen + nav:focus-within {
			left: 0;
			opacity: 1;
			transition: left 0s, opacity 0.5s;
		}
		#mainMenuOpen + nav :global(ul) {
			flex-grow: 0;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			position: relative;
			top: -50vh;
			max-width: 16em;
			margin: auto;
			overflow: hidden;
			background: var(--color-modal-bg);
			box-shadow: var(--shadow-chrome);
			border: var(--border-hairline);
			border-radius: var(--borderRadius-outer);
			transition: top 0.5s;
		}
		#mainMenuOpen:focus + nav :global(ul),
		#mainMenuOpen + nav:focus-within :global(ul) {
			top: 0;
		}
		#mainMenuOpen + nav :global(li) {
			width: 34%;
			margin: 0 1em 1em;
		}
		#mainMenuOpen + nav :global(li:nth-child(even)) {
			margin-left: 0;
		}
		header > nav :global(a),
		header > nav :global(a.action) {
			display: block;
			padding: 0.5em 1em;
			text-align: center;
			background: var(--color-chrome-bg);
			box-shadow: none;
			border: var(--border-hairline);
			border-radius: 0.25em;
			transition: transform 0.3s;
		}
		header > nav :global(a:focus),
		header > nav :global(a:hover),
		header > nav :global(a.action:focus),
		header > nav :global(a.action:hover) {
			transform: scale(1.1);
			box-shadow: none;
		}
		#mainMenuOpen + nav :global(ul:before) {
			content: 'Main Menu';
			display: block;
			width: 100%;
			margin-bottom: 1rem;
			font-weight: bold;
			background: var(--color-chrome-bg);
			border-bottom: 1px solid var(--color-shadow);
		}
		#mainMenuOpen + nav :global(ul:after) {
			content: '';
			display: block;
			position: absolute;
		}
	}
</style>
