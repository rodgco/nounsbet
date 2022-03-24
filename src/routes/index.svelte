<script lang="ts">
	import nounsToken from '$lib/token';

	import NounSVG from './_components/NounSVG.svelte';

	let id = 240;
	$: lastNoun = <number>$nounsToken.totalSupply - 1;
</script>

<div>
	<NounSVG nounId={id} />
</div>
<button on:click={() => id > 0 && id--}>-</button>
<input type="number" bind:value={id} min={0} max={lastNoun} />
<button on:click={() => id < lastNoun && id++}>+</button>
