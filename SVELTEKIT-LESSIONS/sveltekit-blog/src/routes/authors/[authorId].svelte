<script context="module">
	export const load = async ({ params, fetch }) => {
		const id = params.authorId;

		/* 		const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		const user = await res.json();

		const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
		const allPosts = await resPosts.json(); */

		const [resUser, resPost] = await Promise.all([
			fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
			fetch('https://jsonplaceholder.typicode.com/posts')
		]);
		const user = await resUser.json();
		const allPosts = await resPost.json();

		const posts = allPosts.filter((post) => {
			return post.userId == user.id;
		});

		return {
			props: {
				user,
				posts
			}
		};
	};
</script>

<script>
	export let user;
	export let posts;
</script>

<h1>{user.name}</h1>
<i>{user.company.catchPhrase}</i>
<p>{user.email}</p>

<h2>Posts by {user.name}</h2>
<ul>
	{#each posts as post}
		<li>
			<a sveltekit:prefetch href={`/blog/${post.id}`}>{post.title}</a>
		</li>
	{/each}
</ul>

<style>
	li {
		margin-bottom: 10px;
	}
</style>
