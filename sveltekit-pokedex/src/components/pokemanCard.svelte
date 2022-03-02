<script>
	import { fade } from 'svelte/transition';
	export let pokeman;
</script>

<a href={`/pokemon/${pokeman.id}`}>
	<img src={pokeman.image} alt={pokeman.name} transition:fade />
	<h2>{pokeman.id}. {pokeman.name}</h2></a
>
