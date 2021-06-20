import { Typography } from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import { GridContext } from "../providers/GridContext";

export const SettingsBar = ({
  setGridSize,
}: {
  setGridSize: (gridSize: number) => void;
}) => {
  const { grid, setGrid } = useContext(GridContext);
  const [bacteriaPercentage, setBacteriaPercentage] = useState<number>(0.5);

  const handleChange = (event: any) => {
    if (!event.target.value) return;
    if (event.target.value > 30) {
      event.target.value = 30;
    }

    setGridSize(event.target.value);
  };

  const handlePercentageChange = (event: any) => {
    if (!event.target.value) return;

    setBacteriaPercentage(event.target.value);
    console.log(bacteriaPercentage);
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
      <input type="number" min="5" max="30" onChange={handleChange}></input>
      <label>Bacteria Percentage</label>
      <input
        type="range"
        value={bacteriaPercentage}
        min="0"
        max="1"
        step="0.05"
        onChange={handlePercentageChange}
      ></input>
      <button onClick={() => randomiseBoard(grid, setGrid, bacteriaPercentage)}>
        Randomise the bacteria!
      </button>
    </div>
  );
};

const randomiseBoard = (
  board: number[][],
  setGrid: (board: number[][]) => void,
  percentage: number
) => {
  // iterate through the board and create a new board to set to.
  const newBoard = [...board];

  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[0].length; j++) {
      const rand = Math.random();

      if (rand <= percentage) {
        newBoard[i][j] = 1;
      } else {
        newBoard[i][j] = 0;
      }
    }
  }

  setGrid(newBoard);
};
