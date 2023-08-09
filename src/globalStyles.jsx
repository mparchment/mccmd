import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
    overscroll-behavior-y: none;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #333;
  }

  p {
    max-width: 850px;
    align-self: center;
  }
`;
 
export default GlobalStyle;