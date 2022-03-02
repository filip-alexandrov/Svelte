<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await res.json();
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
	let searchTerm = '';

	$: searchedPosts = posts.filter((post) => {
		return post.title.includes(searchTerm) || post.body.includes(searchTerm);
	});
</script>

<h1>Posts</h1>
<input type="text" placeholder="Search" bind:value={searchTerm} />

{#if searchedPosts.length}
	<div class="posts">
		{#each searchedPosts as item}
			<div class="post">
				<h2>{item.title.substring(0, 30)}...</h2>
				<p>{item.body.substring(0, 120)}...</p>
				<p class="link"><a sveltekit:prefetch href={`/blog/${item.id}`}>Read More</a></p>
			</div>
		{/each}
	</div>
{:else}
	<p>No posts found with "{searchTerm}"</p>
{/if}

<style>
	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
		margin: 30px 0;
	}
	.post {
		border: 1px solid #ddd;
		padding: 10px;
		box-shadow: 0 0 10px #eee;
	}
	h2 {
		margin: 0;
	}
	.link {
		text-align: right;
	}
	@media screen and (max-width: 600px) {
		.posts {
			display: grid;
			grid-template-columns: 1fr;
			grid-gap: 20px;
			margin: 30px 0;
		}
	}
	input {
		border: 1px solid #ddd;
		padding: 10px 20px;
		border-radius: 5px;
	}
</style>
