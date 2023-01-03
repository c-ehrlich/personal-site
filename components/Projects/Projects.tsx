import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { getMonthYearDate } from "../../lib/utils";
import { BlogPostsListItem } from "../../types";
import BlogTags from "../BlogTags/BlogTags";
import s from "./Projects.module.css";

type Props = {
  projects: BlogPostsListItem[];
};

const Projects: FC<Props> = ({ projects }) => {
  return (
    <div className={s.projectList}>
      {projects.map((project) => (
        <div className={s.projectGridItem} key={project.slug}>
          <div className={s.projectImageContainer}>
            <Image
              className={s.projectImage}
              src={`${project.frontMatter.image}`}
              alt={`${project.frontMatter.title} thumbnail`}
              width="1000"
              height="1000"
            />
          </div>
          <div className={s.projectText}>
            <h2 className={s.projectTitle}>{project.frontMatter.title}</h2>
            <p className={s.projectDate}>
              {getMonthYearDate(project.frontMatter.publishedDate)}
            </p>
            <div className={s.projectTechnologies}>
              <BlogTags
                tags={project.frontMatter.tags}
                resource="projects"
                href={false}
              />
            </div>
            <p className={s.projectDescription}>
              {project.frontMatter.description}
            </p>
            <div className={s.projectLinks}>
              {project.frontMatter.github && (
                <Link href={project.frontMatter.github}>GitHub</Link>
              )}
              {project.frontMatter.deployed && (
                <Link href={project.frontMatter.deployed}>Live Demo</Link>
              )}
              {project.frontMatter.video && (
                <Link href={project.frontMatter.video}>Demo Video</Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
