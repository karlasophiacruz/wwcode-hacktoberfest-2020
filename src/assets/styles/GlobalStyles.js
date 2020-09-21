import { createGlobalStyle } from 'styled-components/macro';

import { fonts } from './typography';
import { colors } from './colors';

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0;
    background: ${colors?.primaryDark};
    color: ${colors?.neutral};
    display: flex;
    justify-content: center;
  }

  html { 
    font-family: ${fonts?.base}
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;