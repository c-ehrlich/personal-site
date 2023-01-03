// TODO figure out how to run this without disabling this eslint rule
/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import BlogLayout from "../../components/BlogLayout/BlogLayout";
import { BlogPostProps } from "../../types";
import { getFiles, getPostBySlug } from "../../lib/blogUtils";
import Link from "next/link";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import Head from "next/head";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const BlogPost = ({ frontMatter, markdownBody }: BlogPostProps) => {
  if (!frontMatter) return <></>;

  return (
    <PageSectionContainer>
      <Head>
        <title>{frontMatter.title} - Christopher Ehrlich</title>
        <meta
          name="description"
          content={`Christopher Ehrlich Developer Portfolio - ${frontMatter.title}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogLayout frontMatter={frontMatter}>
        <ReactMarkdown
          children={markdownBody}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
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
        about this article, please <Link href="/contact">contact me</Link>. I‘d
        love to hear from you.
      </p>
      <p>
        <Link href="/rss/feed.xml">📡 RSS Feed</Link>
      </p>
    </PageSectionContainer>
  );
};

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getPostBySlug(
    "blog",
    params.slug,
  );

  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  const paths = posts.map((filename: string) => ({
    params: {
      slug: filename.replace(/\.md/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
