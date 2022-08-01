import { ReactNode } from 'react';
import { getFullDate } from '../../lib/utils';
import { BlogFrontMatter } from '../../types';
import BlogTags from '../BlogTags/BlogTags';
import s from './BlogLayout.module.css';

const BlogLayout = ({
  frontMatter,
  children,
}: {
  frontMatter: BlogFrontMatter;
  children: ReactNode;
}) => {
  return (
    <>
      <h1 className={s.blogTitle}>{frontMatter.title}</h1>
      <BlogTags tags={frontMatter.tags} resource='blog' />
      <div>{getFullDate(frontMatter.publishedDate)}</div>
      {children}
    </>
  );
};

export default BlogLayout;
