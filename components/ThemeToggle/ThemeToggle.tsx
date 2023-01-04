import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import s from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage?.getItem("theme") : "dark",
  );
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme || "dark");
      if (theme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    }
  });

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.button
        className={s.themeButton}
        onClick={() => toggleTheme()}
        key={theme === "light" ? "light-icon" : "dark-icon"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === "light" ? "🌤️" : "🌙"}
      </motion.button>
    </AnimatePresence>
  );
};

export default ThemeToggle;
