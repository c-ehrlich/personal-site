import Link from 'next/link';
import { BlogPostsListItem } from '../types';
import React from 'react';
import BlogTags from './BlogTags';
import styled from 'styled-components';
import { getFullDate } from '../lib/utils';

type Props = {
  posts: BlogPostsListItem[];
};

const BlogPosts = (props: Props) => {
  return (
    <BlogPostList className='posts'>
      {!props.posts && <div>No posts!</div>}
      {props.posts &&
        props.posts.map((post) => {
          return (
            <article key={post.slug} className='post-title'>
              <BlogTitle>
                <BlogMainTitle>
                  <Link href={{ pathname: `/blog/${post.slug}` }}>
                    <a>{post.frontMatter.title}</a>
                  </Link>
                </BlogMainTitle>{' '}
                {/* - {post.frontMatter.description} */}
              </BlogTitle>
              <BlogDate>{getFullDate(post.frontMatter.publishedDate)}</BlogDate>
              <StyledBlogTags>
                <BlogTags
                  hashtag={true}
                  tags={post.frontMatter.tags}
                  resource='blog'
                />
              </StyledBlogTags>
            </article>
          );
        })}
    </BlogPostList>
  );
};

const BlogPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BlogTitle = styled.div`
  font-size: 16pt;
`;

const BlogMainTitle = styled.span`
  font-weight: 600;
`;

const StyledBlogTags = styled.div`
  font-family: 'Roboto Condensed';
`;

const BlogDate = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 12pt;
`;

export default BlogPosts;
