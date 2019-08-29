import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import { initialState, recipesReducer } from "./recipes.reducer";
import Recipes from "./recipes.index";

afterEach(cleanup);

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(recipesReducer, initialState, applyMiddleware(thunk)),
    history = createMemoryHistory({ initialEntries: ["/recipes"] })
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    store
  };
}

// Ideally, export from mocked data files. So that can be reused across test suits
const mockedState = {
  recipes: {
    list: [
      {
        title: "Crispy Chicken and Rice with Peas & Arugula Salad",
        id: "437eO3ORCME46i02SeCW46",
        imageUrl:
          "//images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg",
        chefId: "NysGB8obcaQWmq0aQ6qkC",
        tagId: "61Lgvo6rzUIgIGgcOAMgQ8",
        contentType: "recipe"
      },
      {
        title: "Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing",
        id: "2E8bc3VcJmA8OgmQsageas",
        imageUrl:
          "//images.ctfassets.net/kk2bw5ojx476/3TJp6aDAcMw6yMiE82Oy0K/2a4cde3c1c7e374166dcce1e900cb3c1/SKU1503_Hero_102__1_-6add52eb4eec83f785974ddeac3316b7.jpg",
        chefId: "1Z8SwWMmS8E84Iogk4E6ik",
        contentType: "recipe"
      },
      {
        title: "Tofu Saag Paneer with Buttery Toasted Pita",
        id: "5jy9hcMeEgQ4maKGqIOYW6",
        imageUrl:
          "//images.ctfassets.net/kk2bw5ojx476/48S44TRZN626y4Wy4CuOmA/9c0a510bc3d18dda9318c6bf49fac327/SKU1498_Hero_154__2_-adb6124909b48c69f869afecb78b6808-2.jpg",
        contentType: "recipe"
      },
      {
        title: "White Cheddar Grilled Cheese with Cherry Preserves & Basil",
        id: "4dT8tcb6ukGSIg2YyuGEOm",
        imageUrl:
          "//images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg",
        tagId: "3RvdyqS8408uQQkkeyi26k",
        contentType: "recipe"
      }
    ]
  },
  loader: {
    isLoading: false
  }
};

test("Should render list of recipes", () => {
  const { getByTestId } = renderWithRedux(<Recipes />, {
    initialState: mockedState
  });
  const recipeList = getByTestId("recipe-list");
  expect(recipeList.children.length).toBe(4);
});

test("Should show 'No Results' message if recipe list is empty", () => {
  mockedState.recipes.list = [];
  const { getByText, getByTestId } = renderWithRedux(<Recipes />, {
    initialState: mockedState
  });
  const recipeListWrapper = getByTestId("recipe-list-wrapper");
  const emptyMsg = getByText("No Results");
  expect(recipeListWrapper).toContainElement(emptyMsg);
});

test("Should show Loader if is request is in progress", () => {
  mockedState.loader.isLoading = true;
  const { getByText, getByTestId } = renderWithRedux(<Recipes />, {
    initialState: mockedState
  });
  const recipeListWrapper = getByTestId("recipe-list-wrapper");
  const loader = getByText("Loading...");
  expect(recipeListWrapper).toContainElement(loader);
});
