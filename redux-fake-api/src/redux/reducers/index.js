import { combineReducers } from "redux";
import { productReducers, selectedProductReducer } from "./productReducers";

const reducers = combineReducers({
  allReducers: productReducers,
  product: selectedProductReducer,
});

export default reducers;
