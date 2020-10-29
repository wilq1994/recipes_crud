import styled from "styled-components";

import Button from "components/atoms/Button";

export const Wrapper = styled.div`
  background: rgba(3, 35, 48, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
    background: #fff;
    max-width: 800px;
    width: 100%;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 1.4rem;
    box-shadow: 0 0 40px rgba(3, 35, 48, 0.8);
    h2 {
        color: var(--dark-blue-color);
        font-weight: 400;
        font-size: 1.777rem;
        padding: 0;
        margin: 0.375rem 0;
    }
`;

export const Main = styled.div`
    padding: 1.4rem 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  ${Button} + ${Button} {
    margin-left: 0.7rem;
  }
`;