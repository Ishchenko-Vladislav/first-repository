import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const dialogs = [
  { id: 1, name: "Oleg" },
  { id: 2, name: "Lera" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
  { id: 4, name: "Maks" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
