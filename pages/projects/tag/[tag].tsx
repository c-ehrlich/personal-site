import { Params } from 'next/dist/server/router';
import PageSectionContainer from '../../../components/PageSectionContainer';
import Projects from '../../../components/Projects';
import {
  getAllPostsWithFrontMatter,
  getAllPostsWithTag,
} from '../../../lib/blogUtils';
import { BlogPostsListItem } from '../../../types';

const TaggedProjectsList = ({
  projects,
  tag,
}: {
  projects: BlogPostsListItem[];
  tag: string;
}) => {
  return (
    <PageSectionContainer>
      <h2>Projects tagged with &quot;{tag}&quot;</h2>
      <Projects projects={projects} />
    </PageSectionContainer>
  );
};

export async function getStaticProps({ params }: Params) {
  const projects: any = await getAllPostsWithTag('project', params.tag);

  return {
    props: {
      projects,
      tag: params.tag,
    },
  };
}

export async function getStaticPaths() {
  const allProjects: BlogPostsListItem[] = await getAllPostsWithFrontMatter('project');

  // FIXME do this with reduce instead
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
