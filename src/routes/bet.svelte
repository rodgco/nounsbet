<script lang="ts">
	import { ImageData } from '@nouns/assets';
	import { buildSVG } from '@nouns/sdk';

	import Select from './_components/SelectPart.svelte';

	const { palette, images, bgcolors: backgrounds } = ImageData;
	const { bodies, accessories, heads, glasses } = images;

	let body: number, accessory: number, head: number, glassy: number;

	let imageBody: string, imageAccessory: string, imageHead: string, imageGlasses: string;

	$: partsBody = [bodies[body]];
	$: imageBody = buildSVG(
		partsBody.filter((e) => !!e),
		palette,
		backgrounds[0]
	);
	$: partsAccessory = [accessories[accessory]];
	$: imageAccessory = buildSVG(
		partsAccessory.filter((e) => !!e),
		palette,
		backgrounds[0]
	);
	$: partsHead = [heads[head]];
	$: imageHead = buildSVG(
		partsHead.filter((e) => !!e),
		palette,
		backgrounds[0]
	);
	$: partsGlasses = [glasses[glassy]];
	$: imageGlasses = buildSVG(
		partsGlasses.filter((e) => !!e),
		palette,
		backgrounds[0]
	);

	function randomize() {
		body = Math.floor(Math.random() * 100_000) % bodies.length;
		accessory = Math.floor(Math.random() * 100_000) % accessories.length;
		head = Math.floor(Math.random() * 100_000) % heads.length;
		glassy = Math.floor(Math.random() * 100_000) % glasses.length;
	}

	function clear() {
		body = accessory = head = glassy = -1;
	}
</script>

<form>
	<button type="button" on:click={randomize}>Randomize</button>
	<button type="button" on:click={clear}>Clear</button>
	<Select name="bodies" id="body-select" data={bodies} bind:value={body} />
	<Select name="accessories" id="accessory-select" data={accessories} bind:value={accessory} />
	<Select name="heads" id="head-select" data={heads} bind:value={head} />
	<Select name="glasses" id="glasses-select" data={glasses} bind:value={glassy} />
</form>

<div id="noun">
	{#if body < 0}
		<img src="/loading-skull-noun-body.gif" alt="Loading..." class="skull" />
	{:else}
		{@html imageBody}
	{/if}
	{#if accessory < 0}
		<img src="/loading-skull-noun-accessory.gif" alt="Loading..." class="skull" />
	{:else}
		{@html imageAccessory}
	{/if}
	{#if head < 0}
		<img src="/loading-skull-noun-head.gif" alt="Loading..." class="skull" />
	{:else}
		{@html imageHead}
	{/if}
	{#if glassy < 0}
		<img src="/loading-skull-noun-glasses.gif" alt="Loading..." class="skull" />
	{:else}
		{@html imageGlasses}
	{/if}
</div>

<style>
	#noun {
		position: relative;
	}
	#noun :global(svg > :first-child) {
		display: none;
	}
	#noun > *,
	#noun > :global(svg) {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
