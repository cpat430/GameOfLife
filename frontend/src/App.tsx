import React, { useState } from "react";
import "./App.css";
import { Grid } from "./components/grid";
import { CalculateStateButton } from "./components/calculateStateButton";
import { DEFAULT_GRID_SIZE } from "./constants";
import { makeStyles, Typography } from "@material-ui/core";
import { SettingsBar } from "./components/settingsBar";

const useStyles = makeStyles(() => ({
  center: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

const App: React.FC = () => {
  const gridHeight = window.innerHeight * 0.7;

  const classes = useStyles();

  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID_SIZE);

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <Typography variant="h2">Conways Game of Life</Typography>
      </div>
      <div
        className={classes.center}
        style={{
          marginTop: "1%",
        }}
      >
        <Grid
          rows={gridSize}
          cols={gridSize}
          gridDimensions={gridHeight / gridSize}
        />
      </div>
      <div
        className={classes.center}
        style={{
          marginTop: "1%",
        }}
      >
        <SettingsBar setGridSize={setGridSize} />
      </div>
      <div
        className={classes.center}
        style={{
          marginTop: "1%",
        }}
      >
        <CalculateStateButton />
      </div>
    </div>
  );
};

export default App;
