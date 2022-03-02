import { ReactChild } from 'react';
import { BlogFrontMatter } from '../types';

const BlogLayout = ({
  frontMatter,
  children,
}: {
  frontMatter: BlogFrontMatter;
  children: ReactChild;
}) => {
  return (
    <>
      <div>{frontMatter.title}</div>
      {children}
    </>
  );
};

export default BlogLayout;
