import PageSectionContainer from '../../../components/PageSectionContainer/PageSectionContainer';
import DemoProjects from '../../../components/DemoProjects/DemoProjects';
import Projects from '../../../components/Projects/Projects';
import {
  getAllPostsWithFrontMatter,
  getAllPostsWithTag,
} from '../../../lib/blogUtils';
import { BlogPostsListItem } from '../../../types';
import styled from 'styled-components';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface Props {
  projects: BlogPostsListItem[];
  demoProjects: BlogPostsListItem[];
  tag: string;
}

const H2WithBigTopMargin = styled.h2`
  margin-top: 64px;
`;

const TaggedProjectsList = (props: Props) => {
  return (
    <PageSectionContainer>
      {props.projects && props.projects.length > 0 ? (
        <>
          <h2>Projects tagged with &quot;{props.tag}&quot;</h2>
          <Projects projects={props.projects} />
        </>
      ) : (
        <h2>There are no Projects tagged with &quot;{props.tag}&quot;</h2>
      )}
      {props.demoProjects && props.demoProjects.length > 0 && (
        <>
          <H2WithBigTopMargin>
            Bits and bobs tagged with &quot;{props.tag}&quot;
          </H2WithBigTopMargin>
          <DemoProjects demoProjects={props.demoProjects} />
        </>
      )}
    </PageSectionContainer>
  );
};

export async function getStaticProps({ params }: Params) {
  const projects: BlogPostsListItem[] = await getAllPostsWithTag(
    'project',
    params.tag
  ).reverse();
  const demoProjects: BlogPostsListItem[] = await getAllPostsWithTag(
    'demoproject',
    params.tag
  );

  return {
    props: {
      projects,
      demoProjects,
      tag: params.tag,
    },
  };
}

export async function getStaticPaths() {
  const projects: BlogPostsListItem[] = await getAllPostsWithFrontMatter(
    'project'
  );
  const demoProjects: BlogPostsListItem[] = await getAllPostsWithFrontMatter(
    'demoproject'
  );

  const allProjects = ([] as BlogPostsListItem[]).concat(
    projects,
    demoProjects
  );

  // TODO use reduce instead
  const allTags: string[] = [];
  allProjects.forEach((project) => {
    project.frontMatter.tags.forEach((tag: string) => {
      if (allTags.indexOf(tag) === -1) {
        allTags.push(tag);
      }
    });
  });

  const paths = allTags.map((tag: string) => ({
    params: {
      tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default TaggedProjectsList;
