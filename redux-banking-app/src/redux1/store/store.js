/* eslint-disable no-unused-vars */
import rootReducer from "../reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
