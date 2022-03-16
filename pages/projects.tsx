import type { NextPage } from 'next';
import PageSectionContainer from '../components/PageSectionContainer';
import Projects from '../components/Projects';
import { getAllPostsWithFrontMatter } from '../lib/blogUtils';
import { BlogPostsListItem } from '../types';

const projects = ({ projects }: { projects: BlogPostsListItem[] }) => {
  return (
    <PageSectionContainer>
      <h1>🤖 Here are some of my projects.</h1>
      <p>Most of these are hosted on free Heroku instances so please allow them a second to spin up 😃</p>
      <Projects projects={projects} />
    </PageSectionContainer>
  );
};

export async function getStaticProps() {
  let projects = await getAllPostsWithFrontMatter('project');

  projects = projects.sort(
    (a, b) =>
      new Date(b.frontMatter.publishedDate).getTime() -
      new Date(a.frontMatter.publishedDate).getTime()
  );

  return {
    props: {
      projects,
      title: 'Projects',
      description: 'TKTK Change Description',
    },
  };
}

export default projects;
