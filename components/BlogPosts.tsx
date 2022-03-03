import Link from 'next/link'
import { BlogPostsProps } from '../types'
import styled from "styled-components";

const UnstyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div className="posts">
      {!posts && <div>No posts!</div>}
      <UnstyledList>
        {posts &&
          posts
            .sort(
              (a, b) =>
                new Date(b.frontMatter.publishedDate).getTime() - new Date(a.frontMatter.publishedDate).getTime(),
            )
            .map((post) => {
              return (
                <article key={post.slug} className="post-title">
                  <Link href={{ pathname: `/blog/${post.slug}` }}>
                    <a>{post.frontMatter.title}</a>
                  </Link>{' '}
                  - {post.frontMatter.description}
                  <p>{post.frontMatter.tags.map(tag => '#'.concat(tag)).join(', ')}</p>
                </article>
              )
            })}
      </UnstyledList>
    </div>
  )
}

export default BlogPosts