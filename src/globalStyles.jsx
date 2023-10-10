import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --accent-color: #b98474;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    overscroll-behavior-y: none;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #333;
    font-weight: 500;
  }

  p {
    max-width: 1100px;
  }

  a {
    color: inherit;
  }
`;
 
export default GlobalStyle;