import { ReactNode } from 'react';

const PageSectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default PageSectionContainer;
