import Link from 'next/link';
import { BlogPostsListItem } from '../types';
import React from 'react';
import BlogTags from './BlogTags';
import styled from 'styled-components';
import { getDate } from '../lib/utils';

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
                <BlogTitle>
                  <BlogMainTitle>
                    <Link href={{ pathname: `/blog/${post.slug}` }}>
                      <a>{post.frontMatter.title}</a>
                    </Link>
                  </BlogMainTitle>{' '}
                  - {post.frontMatter.description}
                </BlogTitle>
                <StyledBlogTags>
                  <BlogTags
                    hashtag={true}
                    tags={post.frontMatter.tags}
                    resource='blog'
                  />
                </StyledBlogTags>

                <BlogDate>{getDate(post.frontMatter.publishedDate)}</BlogDate>
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

const BlogTitle = styled.div`
  font-size: 16pt;
`;

const BlogMainTitle = styled.span`
  font-weight: 700;
`;

const StyledBlogTags = styled.div`
  font-family: 'Roboto Condensed';
`;

const BlogDate = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12pt;
`;

export default BlogPosts;
