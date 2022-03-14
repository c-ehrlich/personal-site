import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';
import { getMonthYearDate } from '../lib/utils';
import { BlogPostsListItem } from '../types';
import BlogTags from './BlogTags';

type Props = {
  projects: BlogPostsListItem[];
};

const Projects: FC<Props> = ({ projects }) => {
  return (
    <ProjectList>
      {projects.map((project) => (
        <ProjectGridItem key={project.slug}>
          <ProjectImage>
            <StyledImage
              src={`${project.frontMatter.image}`}
              alt={`${project.frontMatter.title} thumbnail`}
              layout='intrinsic'
              width='500'
              height='500'
            />
          </ProjectImage>
          <ProjectText>
            <ProjectTitle>{project.frontMatter.title}</ProjectTitle>
            <ProjectDate>
              {getMonthYearDate(project.frontMatter.publishedDate)}
            </ProjectDate>
            <ProjectTechnologies>
              <BlogTags tags={project.frontMatter.tags} resource='projects' />
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
              {project.frontMatter.video && (
                <Link href={project.frontMatter.video}>
                  <a>Demo Video</a>
                </Link>
              )}
            </ProjectLinks>
          </ProjectText>
        </ProjectGridItem>
      ))}
    </ProjectList>
  );
};

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 64px;
`;

const ProjectGridItem = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 400px auto;
  grid-column-gap: 32px;
  grid-template-areas: 'image text';

  @media (max-width: 800px) {
    grid-template-columns: 100%;
    grid-template-areas:
      'image'
      'text';
    grid-row-gap: 16px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: auto;
  object-fit: fill;
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
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
  font-size: 44px;
  margin: -15px 0 0 -1px;
`;

const ProjectDate = styled.p`
  margin-top: -14px;
  margin-bottom: 0;
  font-family: 'Roboto Condensed';
  font-weight: 400;
`;

const ProjectTechnologies = styled.div`
  margin: 0;
  font-family: 'Roboto Condensed';
  font-weight: 700;
  text-transform: 'capitalize';
`;

const ProjectDescription = styled.p`
  margin-top: 0px;
  margin-bottom: 0;
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

export default Projects;
