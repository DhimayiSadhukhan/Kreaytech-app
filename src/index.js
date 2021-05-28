import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import allReducer from "./reducers/combine.js";
import { Provider } from "react-redux";

const store = createStore(allReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
