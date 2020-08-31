

<svelte:head>
	<title>#ITME Jan Solo!</title>
</svelte:head>

{#each posts as post}

  <ArticlePost {post} />

{/each}

<script>
  import ArticlePost from '../components/ArticlePost.svelte';
  import {posts} from '../posts'
</script>
