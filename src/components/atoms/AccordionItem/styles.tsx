import styled, { css } from "styled-components";

export const Header = styled.header`
  color: var(--secondary-color);
  font-size: 1.333rem;
  font-weight: 700;
  padding: 1em 1.5rem;
  box-shadow: 0 0 0 0px var(--secondary-color) inset;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 2px var(--secondary-color) inset;
  }
`;

export const Content = styled.div`
  padding: 1rem 1.5rem;
`;

export const Wrapper = styled.section<{ isOpen: boolean }>`
  background: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--secondary-color);
  margin-bottom: 2px;
  ${(props) =>
    props.isOpen &&
    css`
      ${Header} {
        background: var(--secondary-color);
        color: #fff;
      }
    `}
`;
