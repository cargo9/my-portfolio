import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #121212;
    color: #fff;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
`;
