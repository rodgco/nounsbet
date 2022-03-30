<script lang="ts">
	export let name: string = '';
	export let size: string = '1em';
	export let color: string = 'inherit';

	let text: HTMLElement;

	const sizes = {
		xsm: '0.625em',
		sm: '0.875em',
		md: '1em',
		lg: '1.275em',
		xlg: '1.75em'
	};

	$: iconName = (name || text?.textContent || '').trim();
	$: fontSize = sizes[size] ?? size;
</script>

<i class="bet-{iconName} icon" style:font-size={fontSize} style:color
	><span bind:this={text}><slot /></span></i
>

<style>
	span {
		display: none;
	}
</style>
