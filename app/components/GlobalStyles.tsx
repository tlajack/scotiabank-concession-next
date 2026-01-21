'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #d32f2f;
    --primary-light: #ff6659;
    --primary-dark: #9a0007;
    --secondary: #0eff1f;
    --secondary-light: #72ff60;
    --secondary-dark: #00ca00;
    --red: #CE0E2D;
    --black: #3E3D3D;
    --yellow: #ffC500;
    --grey: #efefef;
    --barColor: #333333;
  }

  html {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4 {
    font-family: "Proza Libre", sans-serif;
  }

  ul, li, p {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.8rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1rem;
  }
`;

export default GlobalStyles;
