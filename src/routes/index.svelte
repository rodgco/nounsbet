<script lang="ts">
	import nounsToken from '$lib/token';

	import { ImageData, getNounData } from '@nouns/assets';
	import { buildSVG } from '@nouns/sdk';

	const { bgcolors, palette, images } = ImageData;
	const { bodies, accessories, heads, glasses } = images;

	let image: string = '';

	$: console.log($nounsToken);
	$: if ($nounsToken.currentNounSeed) {
		const { parts, background } = getNounData($nounsToken.currentNounSeed);
		image = buildSVG(parts, palette, background);
	}
</script>

<div class="mainContainer">
	<div class="dataContainer">
		<div class="header">👋 Hey there!</div>

		<div class="bio">
			I am <a href="https://twitter.com/rodg_co">rodgco</a> and I'm learning to develop web3 apps, that's
			pretty cool right? Connect your Ethereum wallet and greet!
		</div>

		<div class="greeting">{$nounsToken.currentNounID}</div>
		{@html image}
		{#if !$nounsToken.currentAccount}
			<button class="waveButton" on:click={() => nounsToken.connect()}>Connect Wallet</button>
		{:else if !$nounsToken.hasWallet}
			<div class="warning">
				You need a wallet to use this app! Try <a href="https://metamask.io">Metamask</a>.
			</div>
		{/if}
	</div>
</div>

<style>
	.mainContainer {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 64px;
	}

	.dataContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 600px;
	}

	.header {
		text-align: center;
		font-size: 32px;
		font-weight: 600;
	}

	.bio {
		text-align: center;
		color: gray;
		margin-top: 16px;
	}

	.greeting {
		text-align: center;
		color: blue;
		margin-top: 16px;
		font-size: large;
		font-weight: bolder;
	}

	.warning {
		text-align: center;
		color: #cf5d00;
		background: #e0d392;
		padding: 1rem;
		margin-top: 1rem;
		border: 2px solid #cf5d00;
		border-radius: 0.25rem;
	}

	.waveButton {
		margin-top: 16px;
		padding: 8px;
		border: 0;
		border-radius: 5px;
	}
</style>
