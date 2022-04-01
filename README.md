# Personal Site

## What is this?
This is the repository for my homepage / blog / portfolio. It uses Next.js Server Side Generation to create its content from Markdown files. There are many like it, but this one is mine.

## Getting Started

Clone the repository, then install dependencies and start the development server
```bash
yarn
yarn dev
```

## Adding blog posts or projects
Data for each item goes into a Markdown file, which should be saved to `/data/<resource name>/<arbitrary filename>.md`. Images should be saved to anywhere inside the `/public` folder.

Each file must start with the relevant frontmatter, followed by the project or post itself in markdown.

### Example blog post frontmatter
```
---
title: My first blog post
publishedDate: 2022/03/13
tags:
  - Hello World
  - Another tag
---
```

### Example project frontmatter
```
---
title: Todo list
description: Everyone's favourite project!
publishedDate: 2022/03/13
tags:
  - 6502 Assembly
  - JQuery
  - Duct Tape
image: /img/project/project-screenshot.jpg
github: https://github.com/username/reponame
---
```
Note that you should not include `/public` in the image url.

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Acknowledgements
Markdown blog functionality based on this post by Julia Tan https://bionicjulia.com/blog/setting-up-nextjs-markdown-blog-with-typescript
