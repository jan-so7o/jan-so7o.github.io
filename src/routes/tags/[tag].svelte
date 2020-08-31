<script context="module">
    // import the logic for finding a post based on permalink
    import {findPostByTag} from '../../posts'
  
    // sapper calls this to load our data
    export function preload(page) {
      // find the post based on the permalink param
      const tag = page.params.tag;
      const posts = findPostByTag(tag)
  
      // return a list of props
      return { posts, tag }
    }
</script>
  
<script>
  import ArticlePost from '../../components/ArticlePost.svelte';
  // this prop is filled from the result of the `preload()`
  export let posts;
  export let tag;
</script>
<style>
  h1 {
    font-weight: 440;
    margin-bottom: 1.2em;
    text-transform: uppercase;
  }
</style>
<h1>#{tag}</h1>
{#each posts as post}
  <ArticlePost {post} />
{/each}