import { useEffect, useState } from 'react';
import useStore, { Theme } from '../../lib/store';
import { AnimatePresence, motion } from 'framer-motion';
import s from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore();

  const [hasMounted, setHasMounted] = useState<boolean>(false);

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
        key={theme === Theme.light ? 'light-icon' : 'dark-icon'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === Theme.light ? '🌤️' : '🌙'}
      </motion.button>
    </AnimatePresence>
  );
};

export default ThemeToggle;
