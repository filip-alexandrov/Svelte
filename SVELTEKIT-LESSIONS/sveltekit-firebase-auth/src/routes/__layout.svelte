<script>
	import { userStore, isLoggedIn } from '../stores';
	import { auth } from '../firebase';

	const logout = async () => {
		try {
			const res = await auth.signOut();
			$userStore = {};
			$isLoggedIn = false;
		} catch (err) {
			console.error(err);
		}
	};
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/profile">Profile</a>
		</li>
		{#if $isLoggedIn}
			<li class="mouse-pointer">
				<a on:click={logout}>Logout</a>
			</li>
		{:else}
			<li>
				<a href="/login">Login</a>
			</li>
		{/if}
	</ul>
</nav>

<slot />

<style>
	ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		margin-right: 20px;
		font-weight: bold;
	}
	a {
		color: #555;
		text-decoration: none;
	}
	a:hover {
		color: green;
	}
	.mouse-pointer {
		cursor: pointer;
	}
</style>
