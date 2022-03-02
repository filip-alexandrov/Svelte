<script>
	import { initializeApp, getApps, getApp } from 'firebase/app';
	import { firebaseConfig } from '$lib/firebaseConfig';
	import { browser } from '$app/env';
	import {
		getFirestore,
		collection,
		onSnapshot,
		doc,
		updateDoc,
		deleteDoc,
		addDoc
	} from 'firebase/firestore';

	let firebaseApp;
	let db;
	let colRef;
	if (browser) {
		if (getApps().length === 0) {
			firebaseApp = initializeApp(firebaseConfig);
		} else {
			getApp();
		}
		db = getFirestore();
		colRef = collection(db, 'todos');
	}

	let todos = [];
	const unsubscribe =
		browser &&
		onSnapshot(colRef, (querySnapshot) => {
			let firebaseTodos = [];
			querySnapshot.forEach((doc) => {
				let todo = { ...doc.data(), id: doc.id };
				firebaseTodos = [todo, ...firebaseTodos];
			});
			todos = firebaseTodos;
		});

	let newTodo = '';

	const addTodo = async () => {
		// todos = [...todos, { task: newTodo, isComplete: false, createdAt: new Date() }];
		const docRef = await addDoc(collection(db, 'todos'), {
			task: newTodo,
			isComplete: false,
			createdAt: new Date()
		});
		newTodo = '';
	};

	const markTodoAsComplete = async (item) => {
		// todos[index].isComplete = !todos[index].isComplete;
		await updateDoc(doc(db, 'todos', item.id), {
			isComplete: !item.isComplete
		});
	};

	const deleteTodo = async (id) => {
		// let deleteItem = todos[index];
		// todos = todos.filter((item) => item != deleteItem);
		await deleteDoc(doc(db, 'todos', id));
	};

	let error = '';
	const keyIsPressed = (event) => {
		if (event.key === 'Enter' && newTodo != '') {
			addTodo();
			error = '';
		} else if (event.key === 'Enter') {
			error = 'Todo is empty';
		}
	};
</script>

<input type="text" placeholder="Add a task" bind:value={newTodo} />
<button on:click={addTodo}>Add</button>

<ol>
	{#each todos as todo}
		<!-- if isComplete==true, class='complete' -->
		<li>
			<span class:complete={todo.isComplete}>
				{todo.task}
			</span>
			<span>
				<button on:click={() => markTodoAsComplete(todo)}>✔</button>
				<button on:click={() => deleteTodo(todo.id)}>❌</button>
			</span>
		</li>
	{:else}
		<p>No Todos</p>
	{/each}
	<p class="error">{error}</p>
</ol>

<svelte:window on:keydown={keyIsPressed} />

<style>
	.complete {
		text-decoration: line-through;
	}
	.error {
		color: red;
	}
</style>
