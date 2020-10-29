import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

import Button from "components/atoms/Button";
import { Wrapper, Content, Main, Buttons } from "./styles";

type Props = {
  title: string;
  submitText: string;
  onSubmit: () => void;
  onClose: () => void;
  visible: boolean
};

export const Popup = ({ title, submitText, onSubmit, onClose, visible, children }: PropsWithChildren<Props>) => {
  const popupNode = document.getElementById("popup");

  if (popupNode && visible) {
    return ReactDOM.createPortal(
      <Wrapper>
        <Content>
          <h2>{title}</h2>
          <Main>{children}</Main>
          <Buttons>
            <Button onClick={onSubmit}>{submitText}</Button>
            <Button onClick={onClose} secondary>Close</Button>
          </Buttons>
        </Content>
      </Wrapper>,
      popupNode
    );
  }
  return null;
};
