<script context="module">
    // import the logic for finding a post based on permalink
    import {findPost} from '../../posts'
  
    // sapper calls this to load our data
    export function preload(page) {
      // find the post based on the permalink param
      const post = findPost(page.params.permalink)
  
      // return a list of props
      return { post }
    }
</script>

<script>
    import ArticlePage from '../../components/ArticlePage.svelte';
  // this prop is filled from the result of the `preload()`
  export let post;
</script>

<!-- display the post -->
<ArticlePage {post} />
