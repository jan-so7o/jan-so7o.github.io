---
title: BlogStack Usage/Readme
summary: Posted the actual README. Remove accordingly.
date: 2020/09/01 00:01
tags:
  - init
  - helloworld
---

# Jan Solo's Blog Stack

- a blog template powered by Sapper/Svelte & Markdown
- Together with GithubPages and Travis-CI, your very own Live Blog!

working live sample: https://itme.jansolo.dev (GithubPages + CNAME)

## Files

- `/src/routes/_meta.js` - site wide-related metadata
- `/posts/*.md` - blog posts
- `._travis.yml` - Travis-CI template to auto-deploy blog in your GithubPages.

## Usage with GithubPages and Travis-CI

Requirements: 

    - Sapper/Svelte little knowledge
    - Github and Travis-CI account.
    - GithubPage/repo (yourusername.github.io) see https://pages.github.com/ for details
    - *master* and *dev* branches
        - master branch will contain the `export`ed Blog
        - dev branch will contain the Blog stack

```
$> npx degit jan-so7o/jan-so7o.github.io#dev my-blog
$> cd my-blog
$> npm run dev

```

## How does it work? (GithubPages and Travis-CI)

- On branch *dev* push/updates, Travis-CI runs `$> npm run export_` and deploys the `___sapper__/export` contents to the *master* branch in github.
- all _/posts/*.md_ files translates to  https://yourusername.github.io/posts/file-name

## Markdown Post example

```
---
title: Post Title
summary: Post Summary. (This will appear on the main page)
summaryImg: `someimage.jpg` (optional)
date: 2020/08/31 17:01
isDraft: true (optional. add this if you don't want to publish a post yet)
tags:
  - draft
  - helloworld
---

#Markdown Page Content

- this
- is
- *markdown*

```


## JanSolo-BlogStack is based on and powered by:

- Git
- [Sapper](https://github.com/sveltejs/sapper)
- Markdown Blog posts for Sapper by [joshnuss](https://github.com/joshnuss/sapper-template) - https://dev.to/joshnuss/create-a-blog-with-markdown-sapper-50ad
- Travis-CI (rename `._travis.yml` to `.travis.yml`)
- [Github Pages](https://pages.github.com/) / github.io 

    - master branch is [jan-so7o.github.io](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) / https://itme.jansolo.dev
