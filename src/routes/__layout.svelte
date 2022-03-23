<script lang="ts">
	import Header from './_components/header.svelte';
	import Footer from './_components/footer.svelte';

	import Contact from './modals/_Contact.svelte';
</script>

<div id="fauxBody">
	<Header>
		<ul slot="nav">
			<li><a href="/bet">Bet!!!</a></li>
			<li><a href="/about">Sobre</a></li>
			<li><a href="/faq">FAQ</a></li>
			<li><a href="#contact" class="action">Contact</a></li>
		</ul>
	</Header>
	<main>
		<slot />
	</main>

	<Footer />
</div>

<Contact />

<style>
	@media screen {
		#fauxBody {
			display: flex;
			flex-direction: column;
			height: 100%;
			overflow: auto;
			background: var(--color-main-bg);
			color: var(--color-flowText);
		}
		main {
			background-color: var(--color-modal-bg);
		}
	}
</style>
