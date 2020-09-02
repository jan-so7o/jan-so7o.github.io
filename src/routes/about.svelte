<svelte:head>
	<title>About {meta.blogTitle}</title>
</svelte:head>
<style>

h4 {
  margin-bottom: 0;
  padding-bottom: 0;
}

</style>

<div class="page">
  <header>
    <h1 class="title">About {meta.blogTitle}</h1>
  </header>
  <div class="content">
    <p>Move along, nothing to see here. <em>(yet)</em></p>
    <h4>This Blog is powered by:</h4>
    <p>
    Markdown, <a href="https://sapper.svelte.dev/">Sapper</a>, <a href="https://pages.github.com/">GithubPages</a>, and <a href="https://travis-ci.com/">Travis-CI</a>.<br>
    see <a href="https://github.com/jan-so7o/jan-so7o.github.io">https://github.com/jan-so7o/jan-so7o.github.io</a>
    </p>  
  </div>
</div>
<script>
  import meta from './_meta.js';
</script>