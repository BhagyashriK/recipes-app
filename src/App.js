import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import { GlobalStyles } from "./views/components/normalize/normalize.index";
import Recipes from "./views/routes/recipes/recipes.index";
import RecipeDetails from "./views/routes/recipe-details/recipe-details.index";

const App = () => {
  return (
    <>
      {/* Normalize browser default style */}
      <GlobalStyles />

      <BrowserRouter>
        <Switch>
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipe-details/" component={RecipeDetails} />
          <Route path="*" render={() => <Redirect to="/recipes" />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
