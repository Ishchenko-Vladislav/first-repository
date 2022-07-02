import store from "./allsrc/allstate/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderVirtualDOM() {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPosts={store.addPosts.bind(store)}
        updatePostsText={store.updatePostsText.bind(store)}
        sendMessage={store.sendMessage.bind(store)}
        sendMessageText={store.sendMessageText.bind(store)}
      />
    </React.StrictMode>
  );
}
renderVirtualDOM(store.getState);
store.newRenderDOM(renderVirtualDOM);
