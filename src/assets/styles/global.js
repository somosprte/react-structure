import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button {
    font-family: 'Open Sans';
  }

  button {
    cursor: pointer;
  }

  a {
    color: #FFF;
  }
`;
