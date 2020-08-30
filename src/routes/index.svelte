<style>
	h1, figure, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em;
	}

	article {
		padding: 10px;
		margin: 10px;
		border: 1px solid #f7f7f7;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}


</style>

<svelte:head>
	<title>#ITME Jan Solo!</title>
</svelte:head>

{#each posts as post}
  <article>
    <h2><a href={`/posts/${post.permalink}`}>{post.title}</a></h2>
    <p>{post.summary}</p>
  </article>
{/each}

<script>
	  import {posts} from '../posts'
</script>
