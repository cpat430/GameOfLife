import React, { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "./components/grid";
import { CalculateStateButton } from "./components/calculateStateButton";
import { DEFAULT_GRID_SIZE } from "./constants";
import { Typography } from "@material-ui/core";
import { SettingsBar } from "./components/settingBar";

function App() {
  const gridWidth = window.innerWidth * 0.7;
  const gridHeight = window.innerHeight * 0.7;

  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID_SIZE);

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <Typography variant="h2">Conway's Game of Life</Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1%",
        }}
      >
        <Grid
          rows={gridSize}
          cols={gridSize}
          gridHeight={gridHeight / gridSize}
          gridWidth={gridWidth / gridSize}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1%",
        }}
      >
        <SettingsBar setGridSize={setGridSize} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3%",
        }}
      >
        <CalculateStateButton />{" "}
        {/* add something that will get a specified state from the api*/}
      </div>
    </div>
  );
}

export default App;
