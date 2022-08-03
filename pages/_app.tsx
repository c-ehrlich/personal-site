import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/future/image';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import useStore, { Theme } from '../lib/store';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import HeadComponent from '../components/HeadComponent/HeadComponent';
import s from '../styles/App.module.css';
import '../styles/_global.css';

import '@fontsource/roboto-condensed/300.css';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/700.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/quicksand/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useStore();

  return (
    <AnimateSharedLayout>
      <HeadComponent />
      <div className={s.theme}>
        <div
          className={`${s.containerOuter} ${theme === Theme.dark && 'dark'}`}
        >
          <div className={s.containerInner}>
            <div>
              <header className={s.header}>
                <div className={s.spacedFlexRow}>
                  <Image
                    className={s.avatar}
                    src='/img/avatar.jpg'
                    alt='Christopher Ehrlich face'
                    width={128}
                    height={128}
                    priority
                  />
                  <ThemeToggle />
                </div>

                <h1 className={s.helloText}>Hi, I&apos;m Christopher.</h1>
                <nav className={s.navLinks}>
                  <Link href='/' passHref>
                    <a className={s.navLink}>Home</a>
                  </Link>
                  <Link href='/projects' passHref>
                    <a className={s.navLink}>Projects</a>
                  </Link>
                  <Link href='/blog' passHref>
                    <a className={s.navLink}>Blog</a>
                  </Link>
                  <Link href='/contact' passHref>
                    <a className={s.navLink}>Contact</a>
                  </Link>
                </nav>
              </header>
              <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <Component {...pageProps} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </AnimateSharedLayout>
  );
}

export default MyApp;
