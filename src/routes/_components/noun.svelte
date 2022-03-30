<script lang="ts">
	import { ImageData } from '@nouns/assets';
	import { buildSVG } from '@nouns/sdk';

	import changeBG from '$lib/change_main_bg';

	import type { BigNumberish } from 'ethers';

	import nounsToken from '$lib/token';

	// nounId takes precedence over "parts"
	export let nounId: BigNumberish = null;

	// parts...
	export let body: number | null = null;
	export let accessory: number | null = null;
	export let head: number | null = null;
	let glassy: number | null = null;
	export { glassy as glasses };
	export let background: number | null = null;

	const { palette, images, bgcolors: backgrounds } = ImageData;
	const { bodies, accessories, heads, glasses } = images;

	let image: string = '';

	function notNullish(value: any): boolean {
		return value !== null && value !== undefined;
	}

	$: if (nounId >= 0) {
		nounsToken
			.getSeed(nounId)
			.then((seed) => ({ background, body, accessory, head, glasses: glassy } = seed));
	}
	$: console.log({ nounId, background, body, accessory, head, glassy });

	$: parts = [bodies[body], accessories[accessory], heads[head], glasses[glassy]].filter(
		notNullish
	);
	$: image = buildSVG(parts, palette, backgrounds[background]);
</script>

<svelte:body use:changeBG={backgrounds[background ?? 0]} />

<div id="noun" class:nobg={background === null}>
	{@html image}
</div>

<style>
	#noun {
		position: relative;
	}
	.nobg > :global(svg > :first-child) {
		display: none;
	}
</style>
