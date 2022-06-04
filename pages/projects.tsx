import PageSectionContainer from '../components/PageSectionContainer';
import Projects from '../components/Projects';
import DemoProjects from '../components/DemoProjects';
import { getAllPostsWithFrontMatter } from '../lib/blogUtils';
import { BlogPostsListItem } from '../types';
import Link from 'next/link';

interface Props {
  projects: BlogPostsListItem[];
  demoProjects: BlogPostsListItem[];
}

const projects = (props: Props) => {
  return (
    <PageSectionContainer>
      <h1>🤖 Here are some of my projects.</h1>
      <p>
        Most of these are hosted on free Heroku instances so please allow them a
        second to spin up 😃
      </p>
      <p>
        Additionally you can see my{' '}
        <Link href='/pdf/ce-portfolio-2020.pdf'>
          <a>Fashion Design Portfolio</a>
        </Link>{' '}
        (pdf, about 5mb).
      </p>
      <Projects projects={props.projects} />
      <h1 style={{ marginTop: '64px' }}>
        ⚙️ ...and here are some bits and bobs.
      </h1>
      <p>
        I&apos;m always interested in trying new technologies and expanding my
        understanding of the ones I am already using. These aren&apos;t quite
        full projects, but a collection of demo projects, tests and experiments.
        Most have READMEs, some have live demos, all have the source code 😃
      </p>
      <DemoProjects demoProjects={props.demoProjects} />
    </PageSectionContainer>
  );
};

export async function getStaticProps() {
  let projects = await getAllPostsWithFrontMatter('project');
  let demoProjects = await getAllPostsWithFrontMatter('demoproject');

  projects = projects.sort(
    (a, b) =>
      new Date(b.frontMatter.publishedDate).getTime() -
      new Date(a.frontMatter.publishedDate).getTime()
  );

  demoProjects = demoProjects.sort(
    (a, b) =>
      new Date(b.frontMatter.publishedDate).getTime() -
      new Date(a.frontMatter.publishedDate).getTime()
  );

  return {
    props: {
      projects,
      demoProjects,
      title: 'Projects',
      description: 'TKTK Change Description',
    },
  };
}

export default projects;
