<script>
	import { userStore, isLoggedIn } from '../stores';
</script>

<h1>Profile</h1>
{#if $isLoggedIn}
	<div class="profile">
		<img width="80" height="80" src={$userStore.photoURL} alt="user" />
		<h4>{$userStore.displayName}</h4>
		<p>Your email is {$userStore.email}</p>
	</div>
{/if}

<style>
	.profile {
		display: grid;
		place-items: center;
		min-width: 500px;
		border: 2px solid #ddd;
		margin: 20px;
		padding: 20px;
		background-color: lightgreen;
	}
	img {
		border-radius: 100%;
	}
	h4 {
		margin: 0;
	}
</style>
