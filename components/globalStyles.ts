import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  html, body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

  * {
    box-sizing: border-box;
  }
`;
