/**
 * import all reducers here and combine them using combine reducers
 */
import { combineReducers } from "redux";

import { recipesReducer } from "../views/routes/recipes/recipes.reducer";
import { recipeDetailsReducer } from "../views/routes/recipe-details/recipe-details.reducer";
import loader from "../views/components/loader/loader.reducer";

export default combineReducers({
  recipes: recipesReducer,
  recipeDetails: recipeDetailsReducer,
  loader
});
