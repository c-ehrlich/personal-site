import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Feed } from 'feed';
import { RSSBlogPost } from '../types';

// https://sreetamdas.com/blog/rss-for-nextjs

const getFilesRoot = process.cwd();
const publishRoot = (process.env.SITE_URL as string);

export async function getBlogPostsForRss(): Promise<RSSBlogPost[]> {
  const files = fs.readdirSync(path.join(getFilesRoot, 'data', 'blog'));

  // @ts-ignore FIXME do this in a cleaner way
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(getFilesRoot, 'data', 'blog', postSlug),
      'utf8'
    );
    const { data, content } = matter(source);

    return [
      {
        source: source,
        frontMatter: data,
        content: content,
        slug: postSlug.replace('.md', ''),
      },
      ...allPosts,
    ];
  }, []);
}

export async function generateRssFeed() {
  const posts = await getBlogPostsForRss();
  const date = new Date();
  const author = {
    name: 'Christopher Ehrlich',
    email: 'ehrlich.christopher@gmail.com',
    link: `${publishRoot}/blog`,
  };

  const feed = new Feed({
    title: "Christopher Ehrlich's Blog",
    description: 'Thoughts about Programming, Education, Design, and other things',
    id: publishRoot,
    link: publishRoot,
    // TODO: Add image and favicon
    image: undefined,
    favicon: undefined,
    copyright: `All rights reserved ${date.getFullYear()}, Christopher Ehrlich`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${publishRoot}/rss/feed.xml`,
      json: `${publishRoot}/rss/feed.json`,
      atom: `${publishRoot}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${publishRoot}/blog/${post.slug}`;

    feed.addItem({
      title: post.frontMatter.title,
      id: url,
      link: url,
      description: post.frontMatter.description,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.frontMatter.publishedDate),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}
