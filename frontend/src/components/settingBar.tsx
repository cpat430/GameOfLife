import { Typography } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import { useEffect } from "react";
import { DEFAULT_GRID_SIZE, MAX_GRID_SIZE, MIN_GRID_SIZE } from "../constants";

export const SettingsBar = ({
  setGridSize,
}: {
  setGridSize: (gridSize: number) => void;
}) => {
  const handleChange = (event: any) => {
    if (!event.target.value) return;
    // setGridSize(event.target.value);
    // console.log(event.target.value);
    if (event.target.value > 30) {
      event.target.value = 30;
    }

    setGridSize(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
      }}
    >
      <Typography style={{ whiteSpace: "nowrap" }}>Grid Size: </Typography>
      {/* <Slider
        defaultValue={DEFAULT_GRID_SIZE} // todo, change this to the row/col
        step={1}
        marks
        min={MIN_GRID_SIZE}
        max={MAX_GRID_SIZE}
        valueLabelDisplay="auto"
        onChange={handleChange}
      ></Slider> */}
      <input type="number" min="5" max="30" onChange={handleChange}></input>
    </div>
  );
};
