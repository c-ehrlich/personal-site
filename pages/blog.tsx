import BlogPosts from "../components/BlogPosts/BlogPosts";
import { getAllPostsWithFrontMatter } from "../lib/blogUtils";
import { BlogPostsListItem } from "../types";
import PageSectionContainer from "../components/PageSectionContainer/PageSectionContainer";
import Link from "next/link";
import Head from "next/head";

const Blog = ({ posts }: { posts: BlogPostsListItem[] }) => {
  return (
    <PageSectionContainer>
      <Head>
        <title>Blog - Christopher Ehrlich</title>
        <meta
          name="description"
          content="Christopher Ehrlich Developer Portfolio - Blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog</h1>
      <p>
        <Link href="/">All tags (fake link)</Link>
      </p>
      <p>
        <Link href="/rss/feed.xml">📡 RSS Feed</Link>
      </p>
      <BlogPosts posts={posts} />
    </PageSectionContainer>
  );
};

export async function getStaticProps() {
  let posts = await getAllPostsWithFrontMatter("blog");
  posts = posts.sort(
    (a, b) =>
      new Date(b.frontMatter.publishedDate).getTime() -
      new Date(a.frontMatter.publishedDate).getTime(),
  );

  return {
    props: {
      posts,
      title: "Blog",
      description: "TKTK Change Description",
    },
  };
}

export default Blog;
