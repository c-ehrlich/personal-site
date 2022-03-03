import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image';
import { AnimateSharedLayout } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/globalStyles';
import { lightTheme, darkTheme } from '../components/Theme';
import { useState } from 'react';
import useStore from '../util/store';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useStore();

  return (
    <AnimateSharedLayout>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles theme={theme === 'light' ? lightTheme : darkTheme} />
        <ContainerOuter>
          <ContainerInner>
            <div>
              <header>
                <h1>Christopher Ehrlich</h1>
                <Avatar
                  src='/img/avatar.jpg'
                  alt='Christopher Ehrlich face'
                  width={200}
                  height={200}
                />
                <div>
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
                </div>
                <button onClick={toggleTheme}>Switch Theme</button>
              </header>
              <Component {...pageProps} />
            </div>

            <Footer>
              © 2016-{new Date().getFullYear()} Christopher Ehrlich · Powered by{' '}
              <Link href='https://nextjs.org'>
                <a>Next.js</a>
              </Link>
            </Footer>
          </ContainerInner>
        </ContainerOuter>
      </ThemeProvider>
    </AnimateSharedLayout>
  );
}

const ContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 16px;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  padding: 16px;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

export default MyApp;
