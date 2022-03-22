import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Params } from 'next/dist/server/router';
import { BlogPostsListItem } from '../types';

const root = process.cwd();

export async function getFiles(dataType: string) {
  return fs.readdirSync(path.join(root, 'data', dataType), 'utf8'); // TODO is it utf-8?
}

export async function getPostBySlug(dataType: string, slug: string) {
  const source = fs.readFileSync(
    path.join(root, 'data', dataType, `${slug}.md`),
    'utf8'
  );

  const { data, content } = matter(source);

  return {
    frontMatter: data,
    markdownBody: content,
  };
}

// FIXME: DRY this - this and getAllPostsWithFrontMatter should call the same
// generic getPosts function that takes an object of what to filter based on
export async function getAllPostsWithTag(
  dataType: string,
  tag: string
): Promise<BlogPostsListItem[]> {
  const files = fs.readdirSync(path.join(root, 'data', dataType));

  // @ts-ignore FIXME do this in a cleaner way
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', dataType, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    const caseInsensitiveIndexOf = (arr: string[], q: string) =>
      arr.findIndex((item) => q.toLowerCase() === item.toLowerCase());
      
    if (caseInsensitiveIndexOf(data.tags, tag) !== -1) {
      return [
        {
          frontMatter: data,
          slug: postSlug.replace('.md', ''),
        },
        ...allPosts,
      ];
    }

    return [...allPosts];
  }, []);
}

export async function getAllPostsWithFrontMatter(
  dataType: string
): Promise<BlogPostsListItem[]> {
  const files = fs.readdirSync(path.join(root, 'data', dataType));

  // @ts-ignore FIXME do this in a cleaner way
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', dataType, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        frontMatter: data,
        slug: postSlug.replace('.md', ''),
      },
      ...allPosts,
    ];
  }, []);
}
