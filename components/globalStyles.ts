import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  html, body {
  padding: 0;
  margin: 0;
  font-family: Raleway, Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif;
    font-size: 20px;
    line-height: 1.4;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.20s linear;
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    border-color: ${({ theme }) => theme.link};
  }
  a:hover {
    text-decoration: underline;
  }
  a:visited {
    color: ${({ theme }) => theme.link};
  }
  .bgglow {
    transition: background-color 0.2s;
  }
  .bgglow:hover {
    background-color: ${({ theme }) => theme.linkBg};
  }

  h1 {
    font-weight: 500;
  }

  * {
    box-sizing: border-box;
  }
`;
