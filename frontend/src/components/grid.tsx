import React, { useContext, useEffect } from "react";
import { Cell } from "./cell";
import { makeStyles } from "@material-ui/core";
import { GridContext } from "../providers/GridContext";

const initGrid = (props: GridProps) => {
  const { rows, cols } = props;
  const newGrid: number[][] = [];

  for (let i = 0; i < rows; i++) {
    newGrid[i] = [];
    for (let j = 0; j < cols; j++) {
      newGrid[i][j] = 0;
    }
  }

  return newGrid;
};

type GridProps = {
  rows: number;
  cols: number;
  gridDimensions?: number;
};

const useStyles = makeStyles(() => ({
  row: {
    display: "flex",
  },
}));

export const Grid: React.FC<GridProps> = (props: GridProps) => {
  const { rows, cols, gridDimensions } = props;

  const { grid, setGrid } = useContext(GridContext);

  const classes = useStyles();

  const cellHeight = gridDimensions || 0 / rows;
  const cellWidth = gridDimensions || 0 / cols;

  useEffect(() => {
    setGrid(initGrid({ rows, cols }));
  }, [rows, cols, setGrid]);

  return (
    <>
      <div id="grid">
        {grid.map((row, idx) => {
          return (
            <div className={classes.row} key={idx}>
              {row.map((ele, jdx) => {
                return (
                  <Cell
                    key={idx + "" + jdx}
                    initialValue={ele}
                    cellHeight={cellHeight}
                    cellWidth={cellWidth}
                    i={idx}
                    j={jdx}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
