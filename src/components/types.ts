export type RecipeType = {
  name: string;
  ingredients: string[];
};

export enum ActionTypes {
  SET_RECIPES = "SET_RECIPES",
  ADD_RECIPE = "ADD_RECIPE",
  EDIT_RECIPE = "EDIT_RECIPE",
  DELETE_RECIPE = "DELETE_RECIPE",
  SET_RECIPE = "SET_RECIPE",
  SET_NAME = "SET_NAME",
  SET_INGREDIENTS = "SET_INGREDIENTS",
}

export type RecipeFormType = {
  id: null | number;
  name: string;
  ingredients: string;
};
