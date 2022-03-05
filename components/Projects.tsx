import React, { FC } from 'react';
import { BlogPostsListItem } from '../types';

type Props = {
  projects: BlogPostsListItem[];
};

const Projects: FC<Props> = ({projects}) => {
  return (
    <div>
      <div>Projects</div>
      <div>{JSON.stringify(projects)}</div>
    </div>
  );
};

export default Projects;
