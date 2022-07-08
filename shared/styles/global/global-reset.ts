import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  a { cursor: pointer; text-decoration: none; }
  nav ul {list-style-type: none;}
  input:focus { outline: none; }
`;

