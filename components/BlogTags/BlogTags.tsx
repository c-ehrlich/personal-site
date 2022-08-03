import Link from 'next/link';
import s from './BlogTags.module.css';

interface BlogTagsProps {
  tags: string[];
  resource: string;
  hashtag?: boolean;
}

const BlogTags = ({ tags, resource, hashtag = false }: BlogTagsProps) => {
  return (
    <div className={s.tags}>
      {tags
        .map<React.ReactNode>((tag) => (
          <Link key={tag} href={`/${resource}/tag/${tag}`} passHref>
            <a className={s.innerLink}>{`${
              hashtag === true ? '#' : ''
            }${tag}`}</a>
          </Link>
        ))
        .reduce((prev, curr) => [prev, ' ', curr])}
    </div>
  );
};

export default BlogTags;
