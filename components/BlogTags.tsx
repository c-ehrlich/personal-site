import Link from "next/link";

const BlogTags = ({ tags }: { tags: string[] }) => {
  return (
    <div>
      <span>Tags: </span>
      {tags
        .map<React.ReactNode>((tag) => (
          <Link href={`/blog/tag/${tag}`} key={tag}>
            <a>{tag}</a>
          </Link>
        ))
        .reduce((prev, curr) => [prev, ', ', curr])}
    </div>
  );
};

export default BlogTags;