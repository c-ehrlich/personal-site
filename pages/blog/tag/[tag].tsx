import { Params } from 'next/dist/server/router';
import BlogPosts from '../../../components/BlogPosts';
import {
  getAllPostsWithFrontMatter,
  getAllPostsWithTag,
} from '../../../lib/blogUtils';
import { BlogPostsListItem } from '../../../types';

const TaggedPostsList = ({
  posts,
  tag,
}: {
  posts: BlogPostsListItem[];
  tag: string;
}) => {
  return (
    <>
      <h2>Posts tagged with &quot;{tag}&quot;</h2>
      <BlogPosts posts={posts} />
    </>
  );
};

export async function getStaticProps({ params }: Params) {
  const posts: any = await getAllPostsWithTag('blog', params.tag);
  console.log(posts);

  return {
    props: {
      posts,
      tag: params.tag,
    },
  };
}

export async function getStaticPaths() {
  const allPosts: BlogPostsListItem[] = await getAllPostsWithFrontMatter('blog');

  // FIXME do this with reduce instead
  const allTags: string[] = [];
  allPosts.forEach((post) => {
    post.frontMatter.tags.forEach((tag: string) => {
      if (allTags.indexOf(tag) === -1) {
        allTags.push(tag);
      }
    });
  });

  const paths = allTags.map((tag: string) => ({
    params: {
      tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default TaggedPostsList;
