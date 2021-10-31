import { makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { ALIVE, DEAD, NUM_TYPES } from "../constants";
import { GridContext } from "../providers/GridContext";

// icons from https://icons8.com/icons/set/bacteria

const useStyles = makeStyles(() => ({
  cell: (props: { cellHeight: number; cellWidth: number }) => ({
    display: "flex",
    border: "1px solid black",
    justifyContent: "center",
    alignItems: "center",
    height: props.cellHeight,
    width: props.cellWidth,
  }),
  normal: {
    // backgroundColor: "grey",
    content: `url(bacteria.png)`,
  },
  dead: {
    backgroundColor: "white",
  },
  mutant: {
    content: `url(mutantbacteria.png)`,
  },
}));

type CellProps = {
  initialValue: number;
  cellHeight: number;
  cellWidth: number;
  i: number;
  j: number;
};

export const Cell: React.FC<CellProps> = (props: CellProps) => {
  const { initialValue, cellHeight, cellWidth, i, j } = props;

  const classes = useStyles({ cellHeight, cellWidth });
  const [cellValue, setCellValue] = useState<number>(initialValue);

  const { updateGrid } = useContext(GridContext);

  const handleClick = () => {
    const value = (cellValue + 1) % NUM_TYPES;
    updateGrid({ i, j, value });
  };

  useEffect(() => {
    setCellValue(initialValue);
  }, [initialValue]);

  return (
    <div
      className={`${classes.cell} ${
        cellValue === DEAD
          ? classes.dead
          : cellValue === ALIVE
          ? classes.normal
          : classes.mutant
      }`}
      onClick={() => handleClick()}
    ></div>
  );
};
