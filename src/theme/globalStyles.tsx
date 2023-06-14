import { createGlobalStyle } from "styled-components";
import { CustomFonts } from "./fonts/CustomFonts";

const GlobalStyle = createGlobalStyle`
  ${CustomFonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.bodyBg};
    color: ${({ theme }) => theme.colors.bodyColor};
  }

  button {
    cursor: pointer;
    font: inherit;
    overflow: visible;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    line-height: normal;
    user-select: text;
    -moz-user-select: text;
    touch-action: manipulation;
    -ms-touch-action: manipulation;
  }

  ul, li {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
