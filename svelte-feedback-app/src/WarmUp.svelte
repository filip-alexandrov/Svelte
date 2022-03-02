<!-- Copied from App.svelte -->

<script>
	let firstName = 'Brad'
	let lastName = 'Traversy'
	let color = 'blue' 
	let showText = false
	let users = [
		{
			id: '1', 
			name: 'John'
		},
		{
			id: '2', 
			name: 'Sara'
		},
		{
			id: '3', 
			name: 'Bob'
		},
	]


	// Reactive value 
	$: name= firstName + ' ' + lastName; 

	// function available in html
	const toggle = ()=> {
		color = color === 'blue' ? 'red' : 'blue'
		showText = !showText

		// Add new item to array; ...= all users already in array; 
		users = [...users, {id: '4', name: 'Jen'}]
	}
</script>

<main>
	<!-- use variables directly in code -->
	<h1 style="color: {color}">Hello {name}!</h1>
	
	<!-- Conditionals -->
	{#if showText}
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{:else}
		<p>No Text</p>
	{/if}

	<!-- Events -->
	<button on:click={()=> color = 'purple'}>Click</button>
	<button on:click={toggle}>Toggle</button>

	<!-- For each; key in parentecies -->
	{#each users as user (user.id)}
		<h3>{user.id}: {user.name}</h3>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>