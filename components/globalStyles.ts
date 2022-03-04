import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

  html, body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
    text-decoration: underline;
  }
  a:visited {
    color: ${({ theme }) => theme.link};
  }

  p {
  }

  * {
    box-sizing: border-box;
  }
`;
