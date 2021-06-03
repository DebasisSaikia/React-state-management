import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App1 from "./App1";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { bankingReducers } from "./components/reducers/bankingReducers";
// import store from "./redux/configureStore";

const store = createStore(bankingReducers);

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <Provider store={store}>
    <App1 />
  </Provider>,
  document.getElementById("root")
);
