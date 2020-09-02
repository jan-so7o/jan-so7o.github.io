

<svelte:head>
	<title>{meta.headTitle || meta.blogTitle}</title>
</svelte:head>

{#each posts as post}

  <ArticlePost {post} />

{/each}

<script>
  import ArticlePost from '../components/ArticlePost.svelte';
  import {posts} from '../posts';
  import meta from './_meta.js';
</script>
