import Link from 'next/link';
import s from './BlogTags.module.css';

const BlogTags = ({
  tags,
  resource,
  hashtag = false,
}: {
  tags: string[];
  resource: string;
  hashtag?: boolean;
}) => {
  return (
    <div className={s.tags}>
      {tags
        .map<React.ReactNode>((tag) => (
          <Link key={tag} href={`/${resource}/tag/${tag}`} passHref>
            {/* TODO we currently need bgglow because of globalstyles/theme */}
            <a className={`${s.innerLink} bgglow`}>{`${
              hashtag === true ? '#' : ''
            }${tag}`}</a>
          </Link>
        ))
        .reduce((prev, curr) => [prev, ' ', curr])}
    </div>
  );
};

export default BlogTags;
