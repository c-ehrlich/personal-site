import Link from 'next/link';
import { BlogPostsListItem } from '../types';
import { UnstyledList } from '../styles/UnstyledList';
import React from 'react';
import BlogTags from './BlogTags';
import styled from 'styled-components';

type Props = {
  posts: BlogPostsListItem[];
};

const BlogPosts = (props: Props) => {
  return (
    <BlogPostList className='posts'>
      {!props.posts && <div>No posts!</div>}
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
                  <BlogTags hashtag={true} tags={post.frontMatter.tags} resource='blog' />
                </article>
              );
            })}
    </BlogPostList>
  );
};

const BlogPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default BlogPosts;
