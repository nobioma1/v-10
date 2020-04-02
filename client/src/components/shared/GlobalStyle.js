import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: lightgray;
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  ul {
    display: flex;
  }

  li {
    list-style-type: none;
  }
`;
