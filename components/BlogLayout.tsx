import { ReactNode } from 'react';
import styled from 'styled-components';
import { getFullDate } from '../lib/utils';
import { BlogFrontMatter } from '../types';
import BlogTags from './BlogTags';

const BlogLayout = ({
  frontMatter,
  children,
}: {
  frontMatter: BlogFrontMatter;
  children: ReactNode;
}) => {
  return (
    <>
      <BlogTitle>{frontMatter.title}</BlogTitle>
      <BlogTags tags={frontMatter.tags} resource='blog' />
      <div>{getFullDate(frontMatter.publishedDate)}</div>
      {children}
    </>
  );
};

const BlogTitle = styled.h1`
  margin-top: 8px;
`;

export default BlogLayout;
