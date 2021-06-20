import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "./components/grid";
import { CalculateStateButton } from "./components/calculateStateButton";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid rows={6} cols={6} gridHeight={100} gridWidth={100} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <CalculateStateButton></CalculateStateButton>
      </div>
    </div>
  );
}

export default App;
