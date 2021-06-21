import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GridContextProvider } from "./providers/GridContext";
import { StructureContextProvider } from "./providers/StructureContext";

ReactDOM.render(
  <React.StrictMode>
    <StructureContextProvider>
      <GridContextProvider>
        <App />
      </GridContextProvider>
    </StructureContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
