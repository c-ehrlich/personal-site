export type BlogFrontMatter = {
  title: string;
  description?: string;
  publishedDate: string;
  tags: string[];
  image?: string;
  github?: string;
  deployed?: string;
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

export type RSSBlogPost = {
  source: string;
  frontMatter: BlogFrontMatter;
  content: any;
  slug: string;
}