import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import FetchUsers from "./AsyncAction";

ReactDOM.render(
  <React.StrictMode>
    <FetchUsers />
  </React.StrictMode>,
  document.getElementById("root")
);
