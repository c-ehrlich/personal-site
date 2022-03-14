// TODO figure out how to run this without disabling this eslint rule
/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import BlogLayout from '../../components/BlogLayout';
import { BlogPostProps } from '../../types';
import { getFiles, getPostBySlug } from '../../lib/blogUtils';
import React from 'react';
import { Params } from 'next/dist/server/router';
import Link from 'next/link';
import PageSectionContainer from '../../components/PageSectionContainer';

const BlogPost = ({ frontMatter, markdownBody }: BlogPostProps) => {
  if (!frontMatter) return <></>;

  return (
    <PageSectionContainer>
      <BlogLayout frontMatter={frontMatter}>
        <ReactMarkdown
          children={markdownBody}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag='div'
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </BlogLayout>
      <hr />
      <p>
        If you spot an error, or have any comments, suggestions or questions
        about this article, please{' '}
        <Link href='/contact'>
          <a>contact me</a>
        </Link>
        . I‘d love to hear from you.
      </p>
      <p>
        📡 Feed:{' '}
        <Link href='/rss/feed.xml'>
          <a>RSS</a>
        </Link>
        ,{' '}
        <Link href='/rss/atom.xml'>
          <a>ATOM</a>
        </Link>
        ,{' '}
        <Link href='/rss/feed.json'>
          <a>JSON</a>
        </Link>
      </p>
    </PageSectionContainer>
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
