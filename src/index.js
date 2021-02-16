import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const rootElement = document.querySelector("#root");

render(<App message="App Component" />, rootElement);