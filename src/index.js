import store from "./allsrc/allstate/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderVirtualDOM(state) {
  root.render(
    <React.StrictMode>
      <App store={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
}
renderVirtualDOM(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderVirtualDOM(state);
});
