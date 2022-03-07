import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Blog from '../pages/blog';
import { BlogPostsListItem } from '../types';
import BlogTags from './BlogTags';

type Props = {
  projects: BlogPostsListItem[];
};

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 64px;
`;

const ProjectGridItem = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
  grid-column-gap: 32px;
  grid-template-areas: 'image text';
`;

const ProjectImage = styled.div`
  width: 350px;
  height: 350px;
`;

const ProjectText = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProjectTitle = styled.h2`
  font-family: 'Roboto Condensed';
  font-weight: 700;
  font-size: 48px;
  margin: -14px 0 0 -1px;
`;

const ProjectTechnologies = styled.p`
  margin: 0;
  font-family: 'Roboto Condensed';
  font-weight: 700;
  font-size: 300;
  text-transform: 'capitalize';
`;

const ProjectDescription = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
`;

const ProjectLinks = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-family: 'Roboto Condensed';
  text-transform: uppercase;
  font-weight: 700;
`;

const Projects: FC<Props> = ({ projects }) => {
  return (
    <ProjectList>
      {projects.map((project) => (
        <ProjectGridItem key={project.slug}>
          <ProjectImage>
            <Image
              src={`${project.frontMatter.image}`}
              alt={`${project.frontMatter.title} thumbnail`}
              layout='intrinsic'
              width='500'
              height='500'
            />
          </ProjectImage>
          <ProjectText>
            <ProjectTitle>{project.frontMatter.title}</ProjectTitle>
            <ProjectTechnologies>
              <BlogTags tags={project.frontMatter.tags} resource='project' />
            </ProjectTechnologies>
            <ProjectDescription>
              {project.frontMatter.description}
            </ProjectDescription>
            <ProjectLinks>
              {project.frontMatter.github && (
                <Link href={project.frontMatter.github}>
                  <a>GitHub</a>
                </Link>
              )}
              {project.frontMatter.deployed && (
                <Link href={project.frontMatter.deployed}>
                  <a>Live Demo</a>
                </Link>
              )}
            </ProjectLinks>
          </ProjectText>
        </ProjectGridItem>
      ))}
    </ProjectList>
  );
};

export default Projects;
