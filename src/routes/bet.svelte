<script lang="ts">
	import { ImageData } from '@nouns/assets';

	import Button from './_components/action-button.svelte';
	import Select from './_components/SelectPart.svelte';

	const { palette, images, bgcolors: backgrounds } = ImageData;
	const { bodies, accessories, heads, glasses } = images;
	let body: number = -1,
		accessory: number = -1,
		head: number = -1,
		glassy: number = -1;
</script>

<section>
	<form>
		<Button />
		<Select name="bodies" id="body-select" data={bodies} bind:value={body} />
		<Select name="accessories" id="accessory-select" data={accessories} bind:value={accessory} />
		<Select name="heads" id="head-select" data={heads} bind:value={head} />
		<Select name="glasses" id="glasses-select" data={glasses} bind:value={glassy} />
	</form>
</section>

<style>
	section {
		display: flex;
	}
	form {
		display: flex;
		flex-direction: column;
	}
</style>
