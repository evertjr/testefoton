import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    /* max-width: 376px;
    max-height: 812px; */
    margin: 0 auto;
    /* padding: 40px 20px; */
  }

  button {
    cursor: pointer;
  }
`;
