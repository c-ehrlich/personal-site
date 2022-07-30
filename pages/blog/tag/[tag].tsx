import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import BlogPosts from '../../../components/BlogPosts';
import PageSectionContainer from '../../../components/PageSectionContainer';
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
    <PageSectionContainer>
      <h2>Posts tagged with &quot;{tag}&quot;</h2>
      <BlogPosts posts={posts} />
    </PageSectionContainer>
  );
};

export async function getStaticProps({ params }: Params) {
  const unsortedPosts: BlogPostsListItem[] = await getAllPostsWithTag(
    'blog',
    params.tag
  );

  const posts = unsortedPosts.sort(
    (a, b) =>
      new Date(b.frontMatter.publishedDate).getTime() -
      new Date(a.frontMatter.publishedDate).getTime()
  );

  return {
    props: {
      posts,
      tag: params.tag,
    },
  };
}

export async function getStaticPaths() {
  const allPosts: BlogPostsListItem[] = await getAllPostsWithFrontMatter(
    'blog'
  );

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
