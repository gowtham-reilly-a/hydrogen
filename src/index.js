import "./assets/styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";
import App from "./components/App";
import _ from "lodash";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistStorage = localStorage.getItem("hydrogen");

const store = createStore(
  reducers,
  persistStorage ? JSON.parse(persistStorage) : {},
  composeEnhancers(applyMiddleware())
);

store.subscribe(
  _.throttle(() => {
    localStorage.setItem("hydrogen", JSON.stringify(store.getState()));
  }, 5000)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
