<script lang="ts">
	import nounsToken from '$lib/token';

	import NounSVG from './_components/NounSVG.svelte';

	let id = 240;
	$: console.log($nounsToken);
	$: totalSupply = $nounsToken.totalSupply;
</script>

<div>
	<NounSVG nounId={id} />
</div>
<button on:click={() => id > 0 && id--}>-</button>
<input type="number" bind:value={id} />
<button on:click={() => id < totalSupply - 1 && id++}>+</button>
