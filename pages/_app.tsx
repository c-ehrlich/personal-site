import type { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import useStore, { Theme } from "../lib/store";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import s from "../styles/App.module.css";
import "../styles/_global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useStore();

  return (
    <AnimateSharedLayout>
      <HeadComponent />
      <div className={s.theme}>
        <div
          className={`${s.containerOuter}${
            theme === Theme.dark ? " dark" : ""
          }`}
        >
          <div className={s.containerInner}>
            <div>
              <header className={s.header}>
                <div className={s.spacedFlexRow}>
                  <Image
                    className={s.avatar}
                    src="/img/avatar.jpg"
                    alt="Christopher Ehrlich face"
                    width={128}
                    height={128}
                    priority
                  />
                  <ThemeToggle />
                </div>

                <h1 className={s.helloText}>Hi, I&apos;m Christopher.</h1>
                <nav className={s.navLinks}>
                  <Link className={s.navLink} href="/">
                    Home
                  </Link>
                  <Link className={s.navLink} href="/projects">
                    Projects
                  </Link>
                  <Link className={s.navLink} href="/blog">
                    Blog
                  </Link>
                  <Link className={s.navLink} href="/contact">
                    Contact
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
