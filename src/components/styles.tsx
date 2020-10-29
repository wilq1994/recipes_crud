import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --blue-color: #f0fafe;
        --dark-blue-color: #032330;
        --primary-color: #FF5500;
        --secondary-color: #008EB0;
        --tertiary-color: #7aa6b8;
    }

    html {
        font-size: 16px;
        height: 100%;
    }

    body {
        background: var(--blue-color);
        font-family: sans-serif;
        line-height: 1.4rem;
        padding: 0;
        margin: 0;
        height: 100%;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 2rem;
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.1rem;
  h1 {
    color: var(--dark-blue-color);
    font-weight: 400;
    font-size: 2.369rem;
    padding: 0;
    margin: 0;
  }
`;
