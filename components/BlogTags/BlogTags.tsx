import Link from "next/link";
import s from "./BlogTags.module.css";

interface BlogTagsProps {
  tags: string[];
  resource: string;
  hashtag?: boolean;
  href?: boolean;
}

const BlogTags = ({
  tags,
  resource,
  hashtag = false,
  href = true,
}: BlogTagsProps) => {
  return (
    <div className={s.tags}>
      {tags
        .map<React.ReactNode>((tag) => (
          <Link
            className={s.innerLink}
            key={tag}
            href={href ? `/${resource}/tag/${tag}` : "/"}
          >
            {`${hashtag === true ? "#" : ""}${tag}`}
          </Link>
        ))
        .reduce((prev, curr) => [prev, " ", curr])}
    </div>
  );
};

export default BlogTags;
