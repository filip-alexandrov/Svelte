<script context="module">
	// Run before component is rendered
	export async function load({ params }) {
		const id = params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		return { props: { pokeman } };
	}
</script>

<script>
	// Get property from module script
	export let pokeman;
</script>

<h1 class="text-4xl text-center my-8 uppercase">{pokeman.forms[0].name}</h1>
