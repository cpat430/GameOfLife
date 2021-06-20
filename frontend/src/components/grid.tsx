import React, { useContext, useEffect, useState } from "react";
import { Cell } from "./cell";
import { makeStyles } from "@material-ui/core";
import { GridContext } from "../providers/GridContext";

type GridProps = {
  rows: number;
  cols: number;
  gridWidth?: number;
  gridHeight?: number;
};

type Coord = {
  i: number;
  j: number;
};

// export const Grid = (props: GridProps) => {
//     const { rows, cols } = props;
// }

const useStyles = makeStyles(() => ({
  row: {
    display: "flex",
  },
}));

export const Grid = (props: GridProps) => {
  const { rows, cols, gridWidth, gridHeight } = props;

  const { grid, setGrid } = useContext(GridContext);

  const classes = useStyles();

  const cellHeight = gridHeight || 0 / rows;
  const cellWidth = gridWidth || 0 / cols;

  useEffect(() => {
    setGrid(initGrid({ rows, cols }));
  }, []);

  useEffect(() => {
    setGrid(initGrid({ rows, cols }));
  }, [rows, cols]);

  return (
    <>
      <div>
        {grid.map((row, idx) => {
          return (
            <div className={classes.row}>
              {row.map((ele, jdx) => {
                return (
                  <Cell
                    key={idx + "" + jdx}
                    initialValue={ele}
                    cellHeight={cellHeight}
                    cellWidth={cellWidth}
                    i={idx}
                    j={jdx}
                  ></Cell>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

const initGrid = (props: GridProps) => {
  const { rows, cols } = props;
  let newGrid: number[][];

  newGrid = [];
  for (let i: number = 0; i < rows; i++) {
    newGrid[i] = [];
    for (let j: number = 0; j < cols; j++) {
      newGrid[i][j] = 0;
    }
  }

  return newGrid;
};
