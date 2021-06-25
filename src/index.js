require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvider";
import { initial, reduce } from "./reduce/reducer";
const appEl = document.getElementById("app");

ReactDom.render(
  <StateProvider reduce={reduce} initial={initial}>
    <App />
  </StateProvider>,
  appEl
);
