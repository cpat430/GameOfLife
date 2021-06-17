import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "./components/grid";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid rows={6} cols={6} gridHeight={100} gridWidth={100} />
    </div>
  );
}

export default App;
