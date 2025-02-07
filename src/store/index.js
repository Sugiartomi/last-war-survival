import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  redux: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "login/success":
      return {
        ...state,
        redux: action.payload,
      };

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
