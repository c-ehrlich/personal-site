import PageSectionContainer from '../components/PageSectionContainer/PageSectionContainer';
import Projects from '../components/Projects/Projects';
import DemoProjects from '../components/DemoProjects/DemoProjects';
import { getAllPostsWithFrontMatter } from '../lib/blogUtils';
import { BlogPostsListItem } from '../types';
import Link from 'next/link';
import Head from 'next/head';
import s from '../styles/Projects.module.css';

interface Props {
  projects: BlogPostsListItem[];
  demoProjects: BlogPostsListItem[];
}

const projects = (props: Props) => {
  return (
    <PageSectionContainer>
      <Head>
        <title>Projects - Christopher Ehrlich</title>
        <meta
          name='description'
          content='Christopher Ehrlich Developer Portfolio - Projects'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>🤖 Here are some of my projects.</h1>
      <p>
        The backends and databases are hosted on various free tiers so please
        allow them a second to spin up 😃
      </p>
      <Projects projects={props.projects} />
      <h1 className={s.h1mt64}>
        🤝 I have also made significant OSS contributions, including to:
      </h1>
      <ul>
        <li>
          <Link href='https://github.com/t3-oss/create-t3-app'>
            Create T3 App
          </Link>
        </li>
        <li>
          <Link href='https://github.com/freeCodeCamp'>freeCodeCamp</Link>
        </li>
      </ul>
      <h1 className={s.h1mt64}>⚙️ ...and here are some bits and bobs.</h1>
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
