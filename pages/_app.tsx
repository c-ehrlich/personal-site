import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/future/image';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/globalStyles';
import { lightTheme, darkTheme } from '../components/Theme';
import useStore, { Theme } from '../lib/store';
import ThemeToggle from '../components/ThemeToggle';
import HeadComponent from '../components/HeadComponent';

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
      {/* FIXME: do both of these components need the theme? */}
      <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
        <GlobalStyles theme={theme === Theme.light ? lightTheme : darkTheme} />
        <HeadComponent />
        <ContainerOuter>
          <ContainerInner>
            <div>
              <StyledHeader>
                <SpacedFlexRow>
                  <Avatar
                    src='/img/avatar.jpg'
                    alt='Christopher Ehrlich face'
                    width={128}
                    height={128}
                    priority
                  />
                  <ThemeToggle />
                </SpacedFlexRow>

                <HelloText>Hi, I&apos;m Christopher.</HelloText>
                <NavLinks>
                  <Link href='/' passHref>
                    <NavLink>Home</NavLink>
                  </Link>
                  <Link href='/projects' passHref>
                    <NavLink>Projects</NavLink>
                  </Link>
                  <Link href='/blog' passHref>
                    <NavLink>Blog</NavLink>
                  </Link>
                  <Link href='/contact' passHref>
                    <NavLink>Contact</NavLink>
                  </Link>
                </NavLinks>
              </StyledHeader>
              <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <Component {...pageProps} />
              </AnimatePresence>
            </div>
          </ContainerInner>
        </ContainerOuter>
      </ThemeProvider>
    </AnimateSharedLayout>
  );
}

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const HelloText = styled.h1`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 700;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  padding: 32px 16px 16px 16px;
  padding-bottom: 64px;
`;

const ContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const StyledHeader = styled.header`
  margin-bottom: 16px;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 48px;
  font-family: 'Roboto Condensed';
  font-weight: 300px;
  font-size: 16px;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const NavLink = styled.a`
  font-family: 'Roboto Condensed';
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default MyApp;
