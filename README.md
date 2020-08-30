# Jan Solo's Blog Stack

https://itme.jansolo.dev

## Stack is based on and powered by:

- Git
- [Sapper](https://github.com/sveltejs/sapper)
- Markdown Blog posts for Sapper by [joshnuss](https://github.com/joshnuss/sapper-template) - https://dev.to/joshnuss/create-a-blog-with-markdown-sapper-50ad
- Travis-CI (see .travis.yml)
- [Github Pages](https://pages.github.com/) / github.io 

    - master branch is [jan-so7o.github.io](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) / https://itme.jansolo.dev

## How does it work?

- On branch *dev* updates, Travis-CI runs `$> npm run export_` and deploys the `___sapper__/export` contents to the *master* branch in github.
- all _/posts/*.md_ files translates to  https://itme.jansolo.dev/posts/file-name

