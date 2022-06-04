import { combineReducers } from "redux";
import authReducer from "./authReducers";
import orderReducers from "./orderReducers";

const rootReducer = combineReducers({
  authReducer,
  orderReducers,
});
export default rootReducer;
