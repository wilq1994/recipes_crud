import styled, { css } from "styled-components";

const Button = styled.button<{ small?: boolean; secondary?: boolean }>`
  background: transparent;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1rem;
  padding: 1em 1.5em;
  margin: 0;
  border: 0;
  outline: 0;
  border-radius: 3px;
  box-shadow: 0 0 0 1px var(--primary-color) inset;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  min-width: 120px;
  &:hover {
    background: #fff;
    box-shadow: 0 0 0 3px var(--primary-color) inset;
  }

  ${(props) =>
    props.small &&
    css`
      padding: 0.5em 1em;
      min-width: auto;
    `}

  ${(props) =>
    props.secondary &&
    css`
        color: var(--tertiary-color);
        box-shadow: 0 0 0 1px var(--tertiary-color) inset;
        &:hover {
            box-shadow: 0 0 0 3px var(--tertiary-color) inset;
        }
    `}
`;

export default Button;
