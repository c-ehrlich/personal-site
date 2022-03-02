import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const rehype = require('@mapbox/rehype-prism');
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import BlogLayout from '../../components/BlogLayout';
import { BlogPostProps } from '../../types';
import { getFiles, getPostBySlug } from '../../lib/utils';
import React from 'react';
import { Params } from 'next/dist/server/router';

// TODO move some stuff out of this file

type CodeBlockProps = {
  language: string;
  value: React.ReactNode;
};

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return (
    <div className='code-block'>
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

const BlogPost = ({ frontMatter, markdownBody }: BlogPostProps) => {
  if (!frontMatter) return <></>;

  return (
    <BlogLayout frontMatter={frontMatter}>
      <ReactMarkdown rehypePlugins={[rehype]}>{markdownBody}</ReactMarkdown>
    </BlogLayout>
  );
};

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getPostBySlug(
    'blog',
    params.slug
  );

  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  const paths = posts.map((filename: string) => ({
    params: {
      slug: filename.replace(/\.md/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
