import React, { useEffect, useState } from 'react';
import useStore, { Theme } from '../lib/store';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeButton = styled(motion.button)`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 40px;
  height: 40px;
`;

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
      <ThemeButton
        onClick={() => toggleTheme()}
        key={theme === Theme.light ? 'light-icon' : 'dark-icon'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === Theme.light ? '🌤️' : '🌙'}
      </ThemeButton>
    </AnimatePresence>
  );
};

export default ThemeToggle;
