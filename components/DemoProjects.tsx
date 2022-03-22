import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';
import { BlogPostsListItem } from '../types';
import BlogTags from './BlogTags';

type Props = {
  demoProjects: BlogPostsListItem[];
};

const Projects: FC<Props> = ({ demoProjects }) => {
  return (
    <div>
      {demoProjects.map((project) => (
        <>
          <ProjectText key={project.frontMatter.title}>
            <Link passHref href={project.frontMatter.github as string}>
              <ProjectTitle>{project.frontMatter.title}</ProjectTitle>
            </Link>{' '}
            - {project.frontMatter.description}
          </ProjectText>
          <BlogTags tags={project.frontMatter.tags} resource='projects' />
        </>
      ))}
    </div>
  );
};

const ProjectText = styled.p`
  margin-bottom: 4px;
`;
const ProjectTitle = styled.a`
  font-weight: 700;
`;

export default Projects;
