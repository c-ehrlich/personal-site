import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image';
import { AnimateSharedLayout } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/globalStyles';
import { lightTheme, darkTheme } from '../components/Theme';
import useStore, { Theme } from '../util/store';
import ThemeToggle from '../components/ThemeToggle';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useStore();

  return (
    <AnimateSharedLayout>
      <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
        <GlobalStyles theme={theme === Theme.light ? lightTheme : darkTheme} />
        <ContainerOuter>
          <ContainerInner>
            <div>
              <header>
                <SpacedFlexRow>
                  <Avatar
                    src='/img/avatar.jpg'
                    alt='Christopher Ehrlich face'
                    width={128}
                    height={128}
                  />
                  <ThemeToggle />
                </SpacedFlexRow>

                <h1>Hi, I&apos;m Christopher.</h1>
                <NavLinks>
                  <Link href='/' passHref>
                    <NavLink>Home</NavLink>
                  </Link>
                  <Link href='/blog' passHref>
                    <NavLink>Blog</NavLink>
                  </Link>
                  <Link href='/projects' passHref>
                    <NavLink>Projects</NavLink>
                  </Link>
                  <Link href='/contact' passHref>
                    <NavLink>Contact</NavLink>
                  </Link>
                </NavLinks>
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

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  padding: 32px 16px 16px 16px;
`;

const ContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const SpacedFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default MyApp;
