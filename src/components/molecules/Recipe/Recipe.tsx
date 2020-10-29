import React from "react";

import List from "components/atoms/List";
import Button from "components/atoms/Button";

import { Header, Buttons } from "./styles";

type Props = {
  ingredients: string[];
  onDelete: () => void;
  onEdit: () => void;
};

export const Recipe = ({ ingredients, onDelete, onEdit }: Props) => {
  return (
    <>
      <Header>
        <h2>Ingredients</h2>
        <Buttons>
          <Button onClick={onDelete} small secondary>
            Delete
          </Button>
          <Button onClick={onEdit} small>
            Edit
          </Button>
        </Buttons>
      </Header>
      <List list={ingredients} />
    </>
  );
};
