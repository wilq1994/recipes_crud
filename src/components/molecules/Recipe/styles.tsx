import styled from "styled-components";

import Button from "components/atoms/Button";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--dark-blue-color);
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 400;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  ${Button} + ${Button} {
    margin-left: 0.7rem;
  }
`;
