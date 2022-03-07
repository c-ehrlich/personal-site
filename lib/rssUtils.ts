import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Feed } from 'feed';
import { BlogPostsListItem, RSSBlogPost } from '../types';

const root = process.cwd();

// TODO type this correctly - BlogPostListItem doesn't have markdownBody
export async function getBlogPostsForRss(): Promise<RSSBlogPost[]> {
  const files = fs.readdirSync(path.join(root, 'data', 'blog'));

  // @ts-ignore FIXME do this in a cleaner way
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', 'blog', postSlug),
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
    link: root,
  };

  const feed = new Feed({
    title: "Christopher Ehrlich's blog",
    description: 'TKTK description',
    id: root,
    link: root,
    // TODO: Add image and favicon
    image: undefined,
    favicon: undefined,
    copyright: `All rights reserved ${date.getFullYear()}, Christopher Ehrlich`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${root}/rss/feed.xml`,
      json: `${root}/rss/feed.json`,
      atom: `${root}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = post.source;

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
