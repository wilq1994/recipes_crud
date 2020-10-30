import React, { ChangeEvent, Dispatch } from "react";

import { ActionTypes, RecipeFormType } from "components/types";
import { Action } from "components/reducer";
import FormField from "components/atoms/FormField";

type Props = {
  form: RecipeFormType;
  dispatch: Dispatch<Action>;
};

const Form = ({ form, dispatch }: Props) => {
  function onNameChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: ActionTypes.SET_NAME, payload: event?.target.value });
  }

  function onIngredientsChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch({
      type: ActionTypes.SET_INGREDIENTS,
      payload: event?.target.value,
    });
  }

  return (
    <div>
      <FormField>
        <label>Recipe</label>
        <input type="text" value={form.name} onChange={onNameChange} />
      </FormField>
      <FormField>
        <label>Ingredients</label>
        <textarea value={form.ingredients} onChange={onIngredientsChange} />
      </FormField>
    </div>
  );
};

export default Form;
