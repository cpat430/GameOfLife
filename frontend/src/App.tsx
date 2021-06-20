import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "./components/grid";
import { CalculateStateButton } from "./components/calculateStateButton";

function App() {
  const gridWidth = window.innerWidth * 0.7;
  const gridHeight = window.innerHeight * 0.7;
  const rows = 30;
  const cols = 30; // will make the grid a max nxn

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <Grid
          rows={rows}
          cols={cols}
          gridHeight={gridHeight / rows}
          gridWidth={gridWidth / cols}
        />
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
