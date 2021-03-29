require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
const appEl = document.getElementById("app");

ReactDom.render(<App />, appEl);
