<script context="module">
	// module runs before component is created
	export const load = ({ url, params }) => {
		console.log(url.searchParams.get('key'));
		console.log(params.id);

		const id = params.id;
		return {
			props: {
				id
			}
		};
	};
</script>

<script>
	// catch prop from context module
	export let id;
</script>

{id}
<h1>Blog post</h1>
