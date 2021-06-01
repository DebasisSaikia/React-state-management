import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App1 from "./App1";

import { Provider } from "react-redux";
import store from "./redux1/store/store";
// import { store } from "./state/store/store";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App1 />
  </Provider>,
  document.getElementById("root")
);
