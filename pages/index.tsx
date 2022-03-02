import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christopher Ehrlich</title>
        <meta name="description" content="Full-Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>home page</p>
    </div>
  )
}

export default Home
