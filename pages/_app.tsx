import type { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import s from "../styles/App.module.css";
import "../styles/_global.css";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <HeadComponent />
      <Script
        strategy="beforeInteractive"
        id="set-theme"
        dangerouslySetInnerHTML={{
          __html: `const theme = (() => {
          if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
          }
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
          }
          return "light";
        })();
      
        if (theme === "light") {
          document.documentElement.classList.remove("dark");
        } else {
          document.documentElement.classList.add("dark");
        }
        window.localStorage.setItem("theme", theme);`,
        }}
      />
      <div className={s.containerOuter}>
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
    </AnimateSharedLayout>
  );
}

export default MyApp;
