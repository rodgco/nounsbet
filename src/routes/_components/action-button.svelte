<script lang="ts">
	export let label: string = 'Click me!';
</script>

<button type="button">{label}</button>

<style>
	button {
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		color: var(--color-flowText);
		width: 100%;
		height: 4rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		border-radius: 12px;
		background-color: var(--color-featured-bg);
		border: var(--color-featured-bg);
		cursor: pointer;
	}
	button:hover {
		box-shadow: 0 0 0 0.2rem var(--color-featured);
	}
</style>
