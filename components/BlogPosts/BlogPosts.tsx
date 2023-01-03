import Link from "next/link";
import { BlogPostsListItem } from "../../types";
import BlogTags from "../BlogTags/BlogTags";
import { getFullDate } from "../../lib/utils";
import s from "./BlogPosts.module.css";

type Props = {
  posts: BlogPostsListItem[];
};

const BlogPosts = (props: Props) => {
  return (
    <div className={s.blogPostList}>
      {!props.posts && <div>No posts!</div>}
      {props.posts &&
        props.posts.map((post) => {
          return (
            <article key={post.slug} className="post-title">
              <h3 className={s.blogTitle}>
                <Link href={{ pathname: `/blog/${post.slug}` }}>
                  {post.frontMatter.title}
                </Link>
              </h3>
              <p className={s.blogDate}>
                {getFullDate(post.frontMatter.publishedDate)}
              </p>
              <BlogTags
                hashtag={true}
                tags={post.frontMatter.tags}
                resource="blog"
              />
            </article>
          );
        })}
    </div>
  );
};

export default BlogPosts;
