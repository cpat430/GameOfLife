import { makeStyles } from "@material-ui/core";
import React, { CSSProperties, useContext, useEffect, useState } from "react";
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
  on: {
    backgroundColor: "grey",
  },
  off: {
    backgroundColor: "white",
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
  const [toggled, setToggled] = useState<boolean>(
    initialValue === 1 ? true : false
  );
  const [cellValue, setCellValue] = useState<number>(initialValue);

  const { updateGrid } = useContext(GridContext);

  const handleClick = () => {
    setToggled(!toggled);
    setCellValue(cellValue === 1 ? 0 : 1);
  };

  useEffect(() => {
    setCellValue(initialValue);
    setToggled(initialValue === 1 ? true : false);
  }, [initialValue]);

  useEffect(() => {
    updateGrid({ i, j, value: cellValue });
  }, [cellValue]);

  return (
    <div
      className={`${classes.cell} ${toggled ? classes.on : classes.off}`}
      onClick={() => handleClick()}
    >
      {/* {cellValue} */}
    </div>
  );
};
