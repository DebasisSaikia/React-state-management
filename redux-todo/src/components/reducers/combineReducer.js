import { combineReducers } from "redux";
import { authReducers } from "./authReducers";
import { bankingReducers } from "./bankingReducers";

export const rootReducers = combineReducers({
  auth: authReducers,
  banking: bankingReducers,
});
