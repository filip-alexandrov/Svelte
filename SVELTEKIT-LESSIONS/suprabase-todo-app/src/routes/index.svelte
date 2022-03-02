<script>
	import supabase from '$lib/db';
	import { onMount } from 'svelte';
	import Todo from '$lib/Todo.svelte';
	import { user } from '$lib/stores';
	import { goto } from '$app/navigation';

	let todos = [];
	let newTask = '';

	onMount(async () => {
		await getAllTodos();
	});

	const getAllTodos = async () => {
		try {
			let { data, error } = await supabase.from('todos').select('*');
			todos = data;
		} catch (err) {
			console.log(err);
		}
	};

	const addNewTodo = async () => {
		try {
			const { data, error } = await supabase
				.from('todos')
				.insert([{ task: newTask, user_id: $user.id }]);

			await getAllTodos();
			newTask = '';
		} catch (err) {
			console.log(err);
		}
	};

	const updateTodo = async (todo) => {
		try {
			const { data, error } = await supabase
				.from('todos')
				.update({ task: todo.task, isComplete: todo.isComplete })
				.eq('id', todo.id);
			await getAllTodos();
		} catch (err) {
			console.log(err);
		}
	};

	const deleteTodo = async (todo) => {
		try {
			const { data, error } = await supabase.from('todos').delete().eq('id', todo.id);

			await getAllTodos();
		} catch (err) {
			console.log(err);
		}
	};

	const handleKeyPress = (event) => {
		if (event.key == 'Enter' && newTask != '') {
			addNewTodo();
		}
	};

	const logOut = async () => {
		let { error } = await supabase.auth.signOut();
		$user = false;
		goto('/login');
	};
</script>

<!-- ? = if user not present wont throw an error (just welcome) -->
<h4>Welcome {$user?.email ? $user.email : ''}!</h4>

<div class="add-todo">
	<input type="text" bind:value={newTask} />
	<button on:click={() => addNewTodo()}>Add Task</button>
</div>

{#each todos as todo}
	<Todo {todo} {updateTodo} {deleteTodo} />
{:else}
	<p>No todos found</p>
{/each}

{#if $user.email}
	<p class="switch" on:click={logOut}>Logout</p>
{/if}

<svelte:window on:keypress={handleKeyPress} />

<style>
	.add-todo {
		display: flex;
		margin-bottom: 0.5rem;
	}
	:global(.switch) {
		color: blue;
		cursor: pointer;
	}
	:global(.switch:hover) {
		text-decoration: underline;
	}
</style>
