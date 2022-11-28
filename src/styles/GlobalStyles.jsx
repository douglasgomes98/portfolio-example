import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'DM-Sans-Regular';
    src: url('/fonts/DMSans-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DM-Sans-Medium';
    src: url('/fonts/DMSans-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DM-Sans-Bold';
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
`;
