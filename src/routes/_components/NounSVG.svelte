<script lang="ts">
	import nounsToken from '$lib/token';

	import { ImageData, getNounData } from '@nouns/assets';
	import { buildSVG } from '@nouns/sdk';
	import type { BigNumberish } from 'ethers';

	const { palette } = ImageData;

	export let nounId: BigNumberish;
	let image: string = '';

	$: (async () => {
		if (nounId && nounId < (await nounsToken.totalSupply())) {
			const seed = await nounsToken.getSeed(nounId);
			const { parts, background } = getNounData(seed);
			image = buildSVG(parts, palette, background);
		}
	})();
</script>

{@html image}
