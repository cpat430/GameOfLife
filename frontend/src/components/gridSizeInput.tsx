import React from "react";
import { TextField } from "@material-ui/core";

export const GridSizeInput = ({
  setGridSize,
}: {
  setGridSize: (gridSize: number) => void;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    if (!event.target.value) return;

    if (event.target.value > 30) {
      event.target.value = 30;
    } else if (event.target.value <= 0) {
      event.target.value = 1;
    }

    setGridSize(event.target.value);
  };

  return (
    <div style={{ padding: "5px" }}>
      <TextField
        id="standard-basic"
        label="Grid Size"
        type="number"
        onChange={handleChange}
      ></TextField>
    </div>
  );
};
