import Link from 'next/link';

const BlogTags = ({ tags, resource }: { tags: string[]; resource: string }) => {
  return (
    <>
      {tags
        .map<React.ReactNode>((tag) => (
          <Link key={tag} href={`/${resource}/tag/${tag}`}>
            <a>#{tag}</a>
          </Link>
        ))
        .reduce((prev, curr) => [prev, ' ', curr])}
    </>
  );
};

export default BlogTags;
