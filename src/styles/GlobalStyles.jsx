import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'DM-Sans-Regular';
    font-weight: 400;
    src: url('/fonts/DMSans-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DM-Sans-Medium';
    font-weight: 500;
    src: url('/fonts/DMSans-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DM-Sans-Bold';
    font-weight: 700;
    src: url('/fonts/DMSans-Bold.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    --webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
