import React, { useState, useReducer, useEffect } from "react";
import { AccordionItem } from "./atoms/AccordionItem";

import Button from "components/atoms/Button";
import { Popup } from "components/molecules/Popup";
import { Recipe } from "components/molecules/Recipe";
import Form from "components/molecules/Form";

import { RecipeType, ActionTypes } from "./types";
import { reducer } from "./reducer";
import { GlobalStyles, Wrapper, Header } from "./styles";

const initialState = {
  recipes: [],
  form: {
    id: null,
    name: "",
    ingredients: "",
  },
};

const App = () => {
  const [{ recipes, form }, dispatch] = useReducer(reducer, initialState);
  const [addPopup, setAddPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);

  useEffect(() => {
    const storage = window.localStorage.getItem("recipes");
    if (storage) {
      dispatch({
        type: ActionTypes.SET_RECIPES,
        payload: JSON.parse(storage),
      });
    }
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      window.localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  function onAddRecipe() {
    dispatch({
      type: ActionTypes.ADD_RECIPE,
      payload: { name: form.name, ingredients: form.ingredients.split(",") },
    });
    setAddPopup(false);
  }

  function editRecipe(id: number) {
    dispatch({
      type: ActionTypes.SET_RECIPE,
      payload: id,
    });
    setEditPopup(true);
  }

  function onEditRecipe() {
    dispatch({ type: ActionTypes.EDIT_RECIPE });
    setEditPopup(false);
  }

  function onDeleteRecipe(id: number) {
    dispatch({
      type: ActionTypes.DELETE_RECIPE,
      payload: id,
    });
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <h1>Recipes</h1>
          <Button onClick={() => setAddPopup(true)}>Add Recipe</Button>
        </Header>

        {recipes.length > 0
          ? recipes.map((recipe: RecipeType, recipeId: number) => (
              <AccordionItem key={recipe.name} name={recipe.name}>
                <Recipe
                  ingredients={recipe.ingredients}
                  onDelete={() => onDeleteRecipe(recipeId)}
                  onEdit={() => editRecipe(recipeId)}
                />
              </AccordionItem>
            ))
          : "No Recipes"}
      </Wrapper>

      <Popup
        title="Add Recipe"
        submitText="Add Recipe"
        onSubmit={onAddRecipe}
        onClose={() => setAddPopup(false)}
        visible={addPopup}
      >
        <Form form={form} dispatch={dispatch} />
      </Popup>

      <Popup
        title="Edit Recipe"
        submitText="Edit Recipe"
        onSubmit={onEditRecipe}
        onClose={() => setEditPopup(false)}
        visible={editPopup}
      >
        <Form form={form} dispatch={dispatch} />
      </Popup>
    </>
  );
};

export default App;
