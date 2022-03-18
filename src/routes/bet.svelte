<script lang="ts">
	import { ImageData } from '@nouns/assets';
	import { buildSVG } from '@nouns/sdk';

	import Select from './_components/SelectPart.svelte';

	const { palette, images, bgcolors: backgrounds } = ImageData;
	const { bodies, accessories, heads, glasses } = images;

	let body: number, accessory: number, head: number, glassy: number;

	let image: string = '';

	$: parts = [bodies[body], accessories[accessory], heads[head], glasses[glassy]];
	$: image = buildSVG(
		parts.filter((e) => !!e), // Remove undefined items
		palette,
		backgrounds[0]
	);
</script>

<form>
	<Select name="bodies" id="body-select" data={bodies} bind:value={body} />
	<Select name="accessories" id="accessory-select" data={accessories} bind:value={accessory} />
	<Select name="heads" id="head-select" data={heads} bind:value={head} />
	<Select name="glasses" id="glasses-select" data={glasses} bind:value={glassy} />
</form>
{@html image}
