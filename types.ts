export type BlogFrontMatter = {
  title: string;
  description: string;
  publishedDate: string;
  tags: string[];
};

export type BlogLayoutProps = {
  children: React.ReactNode;
  frontMatter: BlogFrontMatter;
  wordCount: number;
  readingTime: string;
};

export type BlogPostProps = {
  slug: string;
  siteTitle: string;
  frontMatter: BlogFrontMatter;
  markdownBody: any;
  wordCount: number;
  readingTime: string;
};

export type BlogPostsListProps = {
  frontMatter: BlogFrontMatter;
  slug: string;
}[];

export type BlogPostsProps = {
  posts?: BlogPostProps[];
};

export interface BlogProps extends BlogPostsProps {
  title: string;
  description: string;
}
