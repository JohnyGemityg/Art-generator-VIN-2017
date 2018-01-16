import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootEl = document.getElementById("appRoot");
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  );

render(App);
