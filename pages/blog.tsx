import BlogPosts from '../components/BlogPosts';
import { getAllPostsWithFrontMatter } from '../lib/blogUtils';
import { BlogPostsListItem } from '../types';
import PageSectionContainer from '../components/PageSectionContainer';
import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';

const Blog = ({ posts }: { posts: BlogPostsListItem[] }) => {
  return (
    <PageSectionContainer>
      <Head>
        <title>Blog - Christopher Ehrlich</title>
        <meta
          name='description'
          content='Christopher Ehrlich Developer Portfolio - Blog'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>✍🏼 Blog posts on my experience as a developer</h1>
      <p>
        As a strong believer in{' '}
        <Link href='https://www.swyx.io/learn-in-public/'>
          <a>Learning in Public</a>
        </Link>{' '}
        I try both solidify my learning and share with others by writing about
        my experiences. I generally write about problems I come across and how I
        solved them. I&lsquo;ll occassionally also write about my personal
        experiences of making progress as a developer, and thoughts about how my
        experiences as a developer overlap with my previous experiences as a
        designer and teacher.
      </p>
      {/* <p>
        These posts range from quick mind dumps to more time intensive posts, so
        I&apos;ve collected a few{' '}
        <Link href='/blog/tag/fav'>
          <a>favourites</a>
        </Link>
        .
      </p> */}
      <p>
        If you spot an error, or have any comments, suggestions or questions
        about what I&lsquo;ve written, please{' '}
        <Link href='/contact'>
          <a>contact me</a>
        </Link>
        . I&lsquo;d love to hear from you.
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
      <HRWithBottomMargin />
      <BlogPosts posts={posts} />
    </PageSectionContainer>
  );
};

export async function getStaticProps() {
  let posts = await getAllPostsWithFrontMatter('blog');
  posts = posts.sort(
    (a, b) =>
      new Date(b.frontMatter.publishedDate).getTime() -
      new Date(a.frontMatter.publishedDate).getTime()
  );

  return {
    props: {
      posts,
      title: 'Blog',
      description: 'TKTK Change Description',
    },
  };
}

const HRWithBottomMargin = styled.hr`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export default Blog;
