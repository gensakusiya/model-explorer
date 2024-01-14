<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		const { createScene } = await import('$lib/scene');

		createScene(canvas);
	});
</script>

<h1>Model explorer</h1>

<canvas bind:this={canvas}></canvas>
