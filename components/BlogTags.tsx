import Link from 'next/link';
import styled from 'styled-components';

const BlogTags = ({ tags, resource, hashtag = false }: { tags: string[]; resource: string; hashtag?: boolean; }) => {
  return (
    <StyledBlogTags>
      {tags
        .map<React.ReactNode>((tag) => (
          <Link key={tag} href={`/${resource}/tag/${tag}`}>
            <a>{`${hashtag === true ? '#' : ''}${tag}`}</a>
          </Link>
        ))
        .reduce((prev, curr) => [prev, ' ', curr])}
    </StyledBlogTags>
  );
};

const StyledBlogTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px 16px;
`;

export default BlogTags;
