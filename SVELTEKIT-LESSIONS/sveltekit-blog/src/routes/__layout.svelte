<div class="container">
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/stocksocket">stocksocket</a>
			</li>
		</ul>
	</nav>
	<slot />
</div>

<style>
	.container {
		min-width: 800px;
		margin: 50px auto;
	}
	ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		margin-right: 10px;
	}
</style>
