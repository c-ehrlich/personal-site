import type { NextPage } from 'next';
import Head from 'next/head';
import PageSectionContainer from '../components/PageSectionContainer';

const Home: NextPage = () => {
  return (
    <PageSectionContainer>
      <>
        <Head>
          <title>Christopher Ehrlich</title>
          <meta name='description' content='Full-Stack Developer' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <p>home page</p>
      </>
    </PageSectionContainer>
  );
};

export default Home;
