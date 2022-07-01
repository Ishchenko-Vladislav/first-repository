import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addPosts,
  sendMessage,
  updatePostsText,
} from "./allsrc/allstate/state";
const root = ReactDOM.createRoot(document.getElementById("root"));

export function renderVirtualDOM(state) {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPosts={addPosts}
        updatePostsText={updatePostsText}
        sendMessage={sendMessage}
      />
    </React.StrictMode>
  );
}

// renderVirtualDOM();
