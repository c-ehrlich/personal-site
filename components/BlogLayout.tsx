import { ReactChild } from 'react';
import styled from 'styled-components';
import { getDate } from '../lib/utils';
import { BlogFrontMatter } from '../types';
import BlogTags from './BlogTags';

const BlogLayout = ({
  frontMatter,
  children,
}: {
  frontMatter: BlogFrontMatter;
  children: ReactChild | ReactChild[];
}) => {
  return (
    <>
      <BlogTitle>{frontMatter.title}</BlogTitle>
      <BlogTags tags={frontMatter.tags} resource='blog' />
      <div>{getDate(frontMatter.publishedDate)}</div>
      {children}
    </>
  );
};

const BlogTitle = styled.h1`
  margin-top: 8px;
`;

export default BlogLayout;
