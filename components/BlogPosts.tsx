import Link from 'next/link';
import { BlogPostsListItem } from '../types';
import { UnstyledList } from '../styles/UnstyledList';

type Props = {
  posts: BlogPostsListItem[];
};

const BlogPosts = (props: Props) => {
  return (
    <div className='posts'>
      {!props.posts && <div>No posts!</div>}
      <UnstyledList>
        {props.posts &&
          props.posts
            .sort(
              (a, b) =>
                new Date(b.frontMatter.publishedDate).getTime() -
                new Date(a.frontMatter.publishedDate).getTime()
            )
            .map((post) => {
              return (
                <article key={post.slug} className='post-title'>
                  <Link href={{ pathname: `/blog/${post.slug}` }}>
                    <a>{post.frontMatter.title}</a>
                  </Link>{' '}
                  - {post.frontMatter.description}
                  <p>
                    {post.frontMatter.tags
                      .map((tag) => '#'.concat(tag))
                      .join(', ')}
                  </p>
                </article>
              );
            })}
      </UnstyledList>
    </div>
  );
};

export default BlogPosts;
