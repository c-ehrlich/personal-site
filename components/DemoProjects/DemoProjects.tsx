import Link from 'next/link';
import { FC } from 'react';
import { BlogPostsListItem } from '../../types';
import BlogTags from '../BlogTags/BlogTags';
import s from './DemoProjects.module.css';

type Props = {
  demoProjects: BlogPostsListItem[];
};

const Projects: FC<Props> = ({ demoProjects }) => {
  return (
    <div>
      {demoProjects.map((project) => (
        <div key={project.frontMatter.title}>
          <p className={s.projectText}>
            <Link passHref href={project.frontMatter.github as string}>
              <a className={s.projectTitle}>{project.frontMatter.title}</a>
            </Link>{' '}
            - {project.frontMatter.description}
          </p>
          <BlogTags tags={project.frontMatter.tags} resource='projects' />
        </div>
      ))}
    </div>
  );
};

export default Projects;
