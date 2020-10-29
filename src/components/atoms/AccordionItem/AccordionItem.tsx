import React, { useState, PropsWithChildren } from "react";

import { Wrapper, Header, Content } from "./styles";

type Props = {
  name?: string;
};

export const AccordionItem = ({ name, children }: PropsWithChildren<Props>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper isOpen={isOpen}>
      <Header onClick={() => setIsOpen((prevValue) => !prevValue)}>
        {name}
      </Header>
      {isOpen && <Content>{children}</Content>}
    </Wrapper>
  );
};
