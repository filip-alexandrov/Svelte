<script>
	import { goto } from '$app/navigation';

	import supabase from '$lib/db';
	import { user } from '$lib/stores';
	let email = '';
	let isNewRegistration = false;

	const signUp = async () => {
		let { user: userDetails, error } = await supabase.auth.signUp({
			email: email,
			password: 'EdpSrgafXwvTILSUxTQl'
		});
		$user = userDetails;
		goto('/');
	};

	const logIn = async () => {
		let { user: userDetails, error } = await supabase.auth.signIn({
			email: email,
			password: 'EdpSrgafXwvTILSUxTQl'
		});
		$user = userDetails;
		goto('/');
	};
</script>

<label for="">
	<input type="email" placeholder="Email" bind:value={email} />
</label>
<br />
{#if isNewRegistration}
	<button on:click={signUp}>SignUp</button>
	<p class="switch" on:click={() => (isNewRegistration = false)}>Already have an account?</p>
{:else}
	<button on:click={logIn}>Login</button>
	<p class="switch" on:click={() => (isNewRegistration = true)}>Create a new account?</p>
{/if}

<style>
</style>
