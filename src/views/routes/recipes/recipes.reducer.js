import { GET_RECIPES_SUCCESS, GET_RECIPES_ERROR } from "./recipes.actionTypes";

export const initialState = {
  list: []
};

export function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES_SUCCESS:
    case GET_RECIPES_ERROR:
      return Object.assign({}, state, { list: action.payload.items });
    default:
      return state;
  }
}
