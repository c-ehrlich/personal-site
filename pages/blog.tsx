import BlogPosts from '../components/BlogPosts';
import { getAllPostsWithFrontMatter } from '../lib/blogUtils';
import { BlogPostsListItem } from '../types';
import PageSectionContainer from '../components/PageSectionContainer';
import Link from 'next/link';

const Blog = ({ posts }: { posts: BlogPostsListItem[] }) => {
  return (
    <PageSectionContainer>
      <section className='blog-posts'>
        <p>
          I&lsquo;m trying to solidify my learnings and help others at the same
          time by writing these short blog posts. I generally write about
          problems I come across and how I solved them. I&lsquo;ll occassionally
          also write about my personal experiences of navigating my career as a
          software engineer.
        </p>
        <p>
          If you spot an error, or have any comments, suggestions or questions
          about what I&lsquo;ve written, contact me at TKTK contact. I&lsquo;d
          love to hear from you. 🤓
        </p>
        <h1>✍🏼 Blog posts on my experience as a software engineer</h1>
        <p>📡 Feed: <Link href="/rss/feed.xml"><a>RSS</a></Link>, <Link href="/rss/atom.xml"><a>ATOM</a></Link>, <Link href="/rss/feed.json"><a>JSON</a></Link></p>
        <BlogPosts posts={posts} />
      </section>
    </PageSectionContainer>
  );
};

export async function getStaticProps() {
  const posts = await getAllPostsWithFrontMatter('blog');

  return {
    props: {
      posts,
      title: 'Blog',
      description: 'TKTK Change Description',
    },
  };
}

export default Blog;
