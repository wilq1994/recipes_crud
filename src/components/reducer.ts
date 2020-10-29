import { RecipeType, ActionTypes, RecipeFormType } from "./types";

export type State = {
  recipes: RecipeType[];
  form: RecipeFormType;
};

export type Action =
  | { type: ActionTypes.SET_RECIPES; payload: RecipeType[] }
  | { type: ActionTypes.ADD_RECIPE; payload: RecipeType }
  | { type: ActionTypes.EDIT_RECIPE }
  | { type: ActionTypes.DELETE_RECIPE; payload: number }
  | { type: ActionTypes.SET_RECIPE; payload: number; }
  | { type: ActionTypes.SET_NAME; payload: string }
  | { type: ActionTypes.SET_INGREDIENTS; payload: string };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.SET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case ActionTypes.ADD_RECIPE:
      return {
        ...state,
        form: {
            id: null,
            name: "",
            ingredients: "",
        },
        recipes: [...state.recipes, action.payload],
      };
    case ActionTypes.EDIT_RECIPE:
      return {
        ...state,
        form: {
            id: null,
            name: "",
            ingredients: "",
        },
        recipes: state.recipes.map((recipe, id) => {
          return id === state.form.id
            ? { name: state.form.name, ingredients: state.form.ingredients.split(',') }
            : recipe;
        }),
      };
    case ActionTypes.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe, id) => id !== action.payload),
      };
    case ActionTypes.SET_RECIPE:
      return {
        ...state,
        form: {
            id: action.payload,
            ...state.recipes[action.payload]
        },
      };
    case ActionTypes.SET_NAME:
      return {
        ...state,
        form: {
          ...state.form,
          name: action.payload,
        },
      };
    case ActionTypes.SET_INGREDIENTS:
      return {
        ...state,
        form: {
          ...state.form,
          ingredients: action.payload,
        },
      };
    default:
      return state;
  }
}
