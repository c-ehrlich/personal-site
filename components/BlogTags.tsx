import Link from "next/link";

const BlogTags = ({ tags }: { tags: string[] }) => {
  return (
    <div>
      {tags
        .map<React.ReactNode>((tag) => (
          <Link key={tag} href={`/blog/tag/${tag}`}>
            <a>#{tag}</a>
          </Link>
        )).reduce((prev, curr) => [prev, ' ', curr])}
    </div>
  );
};

export default BlogTags;