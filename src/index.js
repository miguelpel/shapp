import React from "react";
import ReactDOM from "react-dom";
import App from "./AppJon";

// import { createStore } from "redux";
import { Provider } from "react-redux";
// import counter from "./reducer";
import store from "./redux/store";
// const store = createStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
