import { createStore, combineReducers } from "redux";
import homePageReducer from "./components/homePage/reducers";

const reducers = combineReducers({ homePageReducer });

export default createStore(reducers);
