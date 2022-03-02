import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <h1>Christopher Ehrlich</h1>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
