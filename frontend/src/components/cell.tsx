import { makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { GridContext } from "../providers/GridContext";

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
    backgroundColor: "grey",
  },
  dead: {
    backgroundColor: "white",
  },
  mutant: {
    backgroundColor: "#FF5147",
  },
}));

export const Cell = ({
  initialValue,
  cellHeight,
  cellWidth,
  i,
  j,
}: {
  initialValue: number;
  cellHeight: number;
  cellWidth: number;
  i: number;
  j: number;
}) => {
  const classes = useStyles({ cellHeight, cellWidth });
  const [cellValue, setCellValue] = useState<number>(initialValue);

  const { updateGrid } = useContext(GridContext);

  const handleClick = () => {
    const value = (cellValue + 1) % 3;
    updateGrid({ i, j, value });
  };

  useEffect(() => {
    setCellValue(initialValue);
  }, [initialValue]);

  return (
    <div
      className={`${classes.cell} ${
        cellValue === 0
          ? classes.dead
          : cellValue === 1
          ? classes.normal
          : classes.mutant
      }`}
      onClick={() => handleClick()}
    ></div>
  );
};
