import { Button } from "@material-ui/core";
import { useContext } from "react";
import { GridContext } from "../providers/GridContext";

export const ResetGridButton = () => {
  const { resetGrid } = useContext(GridContext);

  const handleClick = () => {
    resetGrid();
  };
  return (
    <div style={{ padding: "5px" }}>
      <Button onClick={handleClick}>Reset Grid</Button>
    </div>
  );
};
