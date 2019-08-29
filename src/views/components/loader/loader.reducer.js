import { SHOW_LOADER, HIDE_LOADER } from "./loader.actionTypes";

const initialState = {
  isLoading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return Object.assign({}, state, { isLoading: true });
    case HIDE_LOADER:
      return Object.assign({}, state, { isLoading: false });
    default:
      return state;
  }
}
