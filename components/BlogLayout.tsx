import Link from 'next/link';
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
      <Link href='/blog'>
        <a>{`<< back`}</a>
      </Link>
      <div>{frontMatter.title}</div>
      {children}
    </>
  );
};

export default BlogLayout;
