import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import { Link, Route, Router, Switch } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory, createLocation } from "history";

import {
  initialState,
  recipeDetailsReducer
} from "../recipe-details/recipe-details.reducer";
import RecipeDetails from "./recipe-details.index";

afterEach(cleanup);

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

// Mocked state
const mockedState = {
  recipeDetails: {
    title: "Crispy Chicken and Rice with Peas & Arugula Salad",
    description:
      "Crispy chicken skin, tender meat, and rich, tomatoey sauce form a winning trifecta of delicious in this one-pot braise. We spoon it over rice and peas to soak up every last drop of goodness, and serve a tangy arugula salad alongside for a vibrant boost of flavor and color. Dinner is served! Cook, relax, and enjoy!",
    calories: 785,
    imageUrl:
      "//images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg",
    chef: "Jony Chives",
    tags: ["gluten free", "healthy"]
  },
  loader: {
    isLoading: false
  }
};

const renderComponent = mockedState => {
  return render(
    <Provider
      store={createStore(
        recipeDetailsReducer,
        { ...initialState, ...mockedState },
        applyMiddleware(thunk)
      )}
    >
      <Router
        history={createMemoryHistory({
          initialEntries: [
            "/recipe-details/?id=437eO3ORCME46i02SeCW46&chefId=NysGB8obcaQWmq0aQ6qkC&tagId=61Lgvo6rzUIgIGgcOAMgQ8&contentType=recipe"
          ]
        })}
      >
        <Route path="/recipe-details/" component={RecipeDetails} />
      </Router>
    </Provider>
  );
};

test("Should render recipe details", () => {
  const { getByText, getByTestId } = renderComponent(mockedState);
  const recipeDetailsWrapper = getByTestId("recipe-details-wrapper");
  // Image
  const image = getByTestId("recipe-image");
  expect(image).toHaveAttribute(
    "src",
    "//images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg"
  );
  // title
  const title = getByText("Crispy Chicken and Rice with Peas & Arugula Salad");
  expect(recipeDetailsWrapper).toContainElement(title);
  // chef
  const chef = getByText("Jony Chives");
  expect(recipeDetailsWrapper).toContainElement(chef);
  // description
  const description = getByText(
    "Crispy chicken skin, tender meat, and rich, tomatoey sauce form a winning trifecta of delicious in this one-pot braise. We spoon it over rice and peas to soak up every last drop of goodness, and serve a tangy arugula salad alongside for a vibrant boost of flavor and color. Dinner is served! Cook, relax, and enjoy!"
  );
  expect(recipeDetailsWrapper).toContainElement(description);
  // Calories
  const calorie = getByText("785");
  expect(recipeDetailsWrapper).toContainElement(calorie);
  // Tags
  const tags = getByText("gluten free");
  expect(recipeDetailsWrapper).toContainElement(tags);
});
