import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { loginReducer } from "./loginReducer";
import { fullnameReducer } from "./fullnameReducer";
import { transferFundReducer } from "./transferFundReducer";
import { adminReducer } from "./adminReducer";

export default combineReducers({
  errors: errorReducer,
  login: loginReducer,
  fullname: fullnameReducer,
  transferFund: transferFundReducer,
  admin: adminReducer
});
