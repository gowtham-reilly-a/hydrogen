import "./assets/styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";
import App from "./components/App";
import _ from "lodash";
const { ipcRenderer } = window.require("electron");

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let persistedStorage;

ipcRenderer.on("data:read", (e, data) => {
  persistedStorage = JSON.parse(data);

  const store = createStore(
    reducers,
    persistedStorage,
    composeEnhancers(applyMiddleware())
  );

  store.subscribe(
    _.throttle(() => {
      ipcRenderer.send("data:update", JSON.stringify(store.getState()));
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
});
