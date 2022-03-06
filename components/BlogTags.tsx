import Link from 'next/link';
import styled from 'styled-components';

const BlogTags = ({ tags, resource, hashtag = false }: { tags: string[]; resource: string; hashtag?: boolean; }) => {
  return (
    <StyledBlogTags>
      {tags
        .map<React.ReactNode>((tag) => (
          <Link key={tag} href={`/${resource}/tag/${tag}`} passHref>
            <InnerLink className='bgglow'>{`${hashtag === true ? '#' : ''}${tag}`}</InnerLink>
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
  gap: 8px 8px;
`;

const InnerLink = styled.a`
  border: 2px solid;
  border-radius: 3px;
  padding: 0px 4px;
  font-size: 11px;
  font-family: 'Quicksand';
  text-transform: uppercase;
  &:hover {
    text-decoration: none;
  }
`;

export default BlogTags;
