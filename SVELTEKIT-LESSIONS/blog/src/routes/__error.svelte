<!-- Catch 404 not found -->
<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script>
	export let error;
	export let status;
</script>

<h1>{error.name} {status}</h1>
<p>{error.message}</p>
