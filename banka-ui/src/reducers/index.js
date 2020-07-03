import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { loginReducer } from "./loginReducer";

export default combineReducers({
  errors: errorReducer,
  login: loginReducer,
});
