import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export async function getAllPostsWithFrontMatter(dataType: string) {
  const files = fs.readdirSync(path.join(root, 'data', dataType));

  // @ts-ignore FIXME do this in a cleaner way
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', dataType, postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        frontMatter: data,
        slug: postSlug.replace('.md', ''),
      },
      ...allPosts,
    ]
  }, [])
}
