export type BlogFrontMatter = {
  title: string;
  description: string;
  publishedDate: string;
  tags: string[];
};

export type BlogPostsListItem = {
  frontMatter: BlogFrontMatter;
  slug: string;
};

export type BlogPostProps = {
  slug: string;
  siteTitle: string;
  frontMatter: BlogFrontMatter;
  markdownBody: any;
  wordCount: number;
  readingTime: string;
};
