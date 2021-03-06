import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
