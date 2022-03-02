<script>
	let name = '';
	let email = '';
	let message = '';
	let error = '';

	const submitForm = async () => {
		try {
			const submit = await fetch('/api', {
				method: 'POST',
				body: JSON.stringify({ name, email })
			});
			const data = await submit.json();
			message = data;
		} catch (err) {
			error = err;
		}
	};
</script>

<h1>Contact</h1>
{#if !message && !error}
	<form on:submit|preventDefault={submitForm}>
		<label for="">
			Name:
			<input type="text" name="name" bind:value={name} />
		</label>
		<label for="">
			Email:
			<input type="text" name="email" bind:value={email} />
		</label>
		<input type="submit" />
	</form>
{:else if message}
	<p>Hi {message.name}, your submission has been received.</p>
{:else if error}
	<p>The form submission failed. Contact admit@website.com</p>
	<p>{error}</p>
{/if}

<style>
	label {
		display: block;
		margin-bottom: 20px;
	}
</style>
