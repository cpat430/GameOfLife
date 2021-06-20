import React, { useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "./components/grid";
import { CalculateStateButton } from "./components/calculateStateButton";
import { DEFAULT_GRID_SIZE } from "./constants";
import { Typography } from "@material-ui/core";
import { SettingsBar } from "./components/settingBar";

function App() {
  const gridWidth = window.innerWidth * 0.7;
  const gridHeight = window.innerHeight * 0.7;
  // const rows = DEFAULT_GRID_SIZE;
  // const cols = DEFAULT_GRID_SIZE; // will make the grid a max nxn

  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID_SIZE);

  useEffect(() => {
    console.log("useeffect", gridSize); //todo: update the number of rows and columns.
  }, [gridSize]);

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
        <CalculateStateButton />
      </div>
    </div>
  );
}

export default App;
