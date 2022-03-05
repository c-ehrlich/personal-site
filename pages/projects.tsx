import type { NextPage } from 'next';
import PageSectionContainer from '../components/PageSectionContainer';
import Projects from '../components/Projects';
import { getAllPostsWithFrontMatter } from '../lib/utils';
import { BlogPostsListItem } from '../types';

const projects = ({ projects }: { projects: BlogPostsListItem[] }) => {
  return (
    <PageSectionContainer>
      <section className='projects'>
        <p>Here&apos;s some of my projects</p>
        <Projects projects={projects} />
      </section>
    </PageSectionContainer>
  );
};

export async function getStaticProps() {
  const projects = await getAllPostsWithFrontMatter('project');

  return {
    props: {
      projects,
      title: 'Projects',
      description: 'TKTK Change Description',
    },
  };
}

export default projects;
