<script>
    export let post;
</script>
<style>

    .post {
        padding-bottom: 2em;
    }
    .post-title {
        font-size: 2.4em;
        font-weight: 400;
        color: #222;
        margin-bottom: 0.4em;
        
    }
    .post-avatar {
        border-radius: 50px;
        float: right;
        margin-left: 1em;
    }
    .post-description {
        font-family: Georgia, "Cambria", serif;
        color: #444;
        line-height: 1.8em;
    }
    .post-meta {
        color: #999;
        font-size: 90%;
        margin: 0;
    }
    
    .post-category {
        margin: 0 0.1em;
        padding: 0.3em 1em;
        color: #fff;
        background: #999;
        font-size: 60%;
        text-decoration: none;
        text-transform: uppercase;
    }
        .post-category-design {
            background: #5aba59;
        }
        .post-category {
            background: #4d85d1;
        }
        .post-category-yui {
            background: #8156a7;
        }
        .post-category-js {
            background: #df2d4f;
        }
    
    .post-images {
        margin: 1em 0;
    }
    .post-image-meta {
        margin-top: -3.5em;
        margin-left: 1em;
        color: #fff;
        text-shadow: 0 1px 1px #333;
    }
    
    article.post h2 a {
        color:#333;
        text-decoration: none;
    }
    
    </style>
<article class="post">
	<header class="post-header">
		
		<h2 class="post-title">
			<a href={`/posts/${post.permalink}`}>
			{post.title}
			</a>
		</h2>

		<p class="post-meta">
            {post.datestr}
			{#each post.tags as tag} 
			<a class="post-category post-category-{tag}" href="{`/tags/${tag}`}">{tag}</a>
			{/each}
		</p>
	</header>

	<div class="post-description">
            {@html post.html}
	</div>
</article>