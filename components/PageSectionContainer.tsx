import { ReactChild } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { springInAnimate, springInInitial, springInTransition } from '../motion/springIn';

const StyledPageSectionContainer = styled(motion.div)`
  /* color: green; */
`;

const PageSectionContainer = ({ children }: { children: ReactChild | ReactChild[] }) => {
  return (
    <StyledPageSectionContainer
      initial={springInInitial}
      animate={springInAnimate}
      transition={springInTransition}
    >
      {children}
    </StyledPageSectionContainer>
  );
};

export default PageSectionContainer;
