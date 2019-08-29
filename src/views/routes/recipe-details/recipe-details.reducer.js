import {
  GET_RECIPE_DETAILS_SUCCESS,
  GET_RECIPE_DETAILS_ERROR
} from "./recipe-details.actionTypes";

export const initialState = {};

export function recipeDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE_DETAILS_SUCCESS:
    case GET_RECIPE_DETAILS_ERROR:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
