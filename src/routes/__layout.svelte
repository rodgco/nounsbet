<script lang="ts">
	import Header from './_components/header.svelte';
	import Footer from './_components/footer.svelte';

	import Icon from './_components/icon.svelte';

	import nounsToken from '$lib/token';

	import Contact from './modals/_Contact.svelte';
</script>

<div id="fauxBody">
	<Header>
		<ul slot="nav">
			<li><a href="/bet"><Icon>play</Icon>App</a></li>
			<li><a href="/about"><Icon>info-circle</Icon>About</a></li>
			<li><a href="/faq"><Icon>qa</Icon>FAQ</a></li>
			<li><a href="#contact" class="action">Contact</a></li>
			{#if !$nounsToken.currentAccount}
				<li><button class="action" on:click={() => nounsToken.connect()}>Connect</button></li>
			{:else}
				<li>
					<span class="info">
						{$nounsToken.currentAccount.slice(0, 6)}...{$nounsToken.currentAccount.slice(-4)}
					</span>
				</li>
				{#if !$nounsToken.correctChain}
					<li>
						<button class="action" on:click={() => nounsToken.changeNetwork('0x1')}>Mainnet</button>
					</li>
				{/if}
			{/if}
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
			/* background: var(--color-main-bg); */
			color: var(--color-flowText);
		}
		main {
			/* background-color: var(--color-main-bg); */
			max-width: 60rem;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
