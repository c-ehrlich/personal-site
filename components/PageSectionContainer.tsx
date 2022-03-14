import { ReactChild } from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const PageSectionContainer = ({
  children,
}: {
  children: ReactChild | ReactChild[];
}) => {
  return (
    <motion.main
      initial='hidden'
      animate='enter'
      variants={variants}
      transition={{ type: 'linear', duration: 0.17 }}
    >
      {children}
    </motion.main>
  );
};

export default PageSectionContainer;
