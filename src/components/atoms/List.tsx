import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 0.5em 0;
    & + li {
      border-top: 1px solid #e0e0e0;
    }
  }
`;

type Props = {
  list: string[];
};

const List = ({ list }: Props) => {
  return (
    <Wrapper>
      {list.map((item, id) => (
        <li key={id}>{item}</li>
      ))}
    </Wrapper>
  );
};

export default List;
