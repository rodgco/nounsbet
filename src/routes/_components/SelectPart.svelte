<script lang="ts">
	export let name: string;
	export let id: string;
	export let data: { filename: string; data: string }[];
	export let value: number = -1;

	function getName(filename: string) {
		return filename
			.split('-')
			.slice(1)
			.map((w: string) => w[0].toUpperCase() + w.substring(1))
			.join(' ');
	}
</script>

<select {name} {id} bind:value>
	<option value={-1} selected>None</option>
	{#each data as entry, index}
		<option value={index}>{getName(entry.filename)}</option>
	{/each}
</select>

<button type="button" on:click={() => (value = Math.floor(Math.random() * 100_000) % data.length)}
	>R</button
>
