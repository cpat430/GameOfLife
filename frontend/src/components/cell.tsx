import { makeStyles } from "@material-ui/core";
import React, { CSSProperties, useState } from "react";

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
}: {
  initialValue: number;
  cellHeight: number;
  cellWidth: number;
}) => {
  const classes = useStyles({ cellHeight, cellWidth });
  const [toggled, setToggled] = useState(initialValue === 1 ? true : false);
  const [cellValue, setCellValue] = useState(initialValue);

  const handleClick = () => {
    setToggled(!toggled);
    setCellValue(cellValue === 1 ? 0 : 1);
  };

  return (
    <div
      className={`${classes.cell} ${toggled ? classes.on : classes.off}`}
      onClick={handleClick}
    >
      {cellValue}
    </div>
  );
};
