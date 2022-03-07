import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import PageSectionContainer from '../components/PageSectionContainer';
import { generateRssFeed } from '../lib/rssUtils';

const Home: NextPage = () => {
  return (
    <PageSectionContainer>
      <>
        <Head>
          <title>Christopher Ehrlich</title>
          <meta name='description' content='Full-Stack Developer' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1>A quick intro</h1>
        <p>After Graduating from Central St Martins I worked for designers such as <Link href='https://aitorthroup.com/'><a>Aitor Throup</a></Link> and <Link href='https://www.janjanvanessche.com/'>Jan-Jan van Essche</Link>, and then became a lecturer at the <Link href='https://www.ufg.at/'>University of Art and Design in Linz</Link>.</p>
        <p>During the Coronavirus pandemic I rediscovered my childhood interest in programming, and started teaching myself Full Stack development.</p>
        <p>My goal is to work for a mission-driven company to develop real, useful products.</p>
      </>
    </PageSectionContainer>
  );
};

export const getStaticProps = async (_context) => {
  await generateRssFeed();

  return { props: {}};
}

export default Home;
