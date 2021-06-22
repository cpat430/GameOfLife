import { useState } from "react";
import { GridSize } from "./gridSize";
import { RandomiseBacteria } from "./randomiseBacteria";
import { StructureType } from "./structureType";
import { MutantToggle } from "./mutantToggle";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "80%",
  },
}));

export const SettingsBar = ({
  setGridSize,
}: {
  setGridSize: (gridSize: number) => void;
}) => {
  const [bacteriaPercentage, setBacteriaPercentage] = useState<number>(0.5);

  const classes = useStyles();
  return (
    <div className={classes.grid}>
      <GridSize setGridSize={setGridSize} />
      <RandomiseBacteria
        bacteriaPercentage={bacteriaPercentage}
        setBacteriaPercentage={setBacteriaPercentage}
      />
      <StructureType />
      <MutantToggle />
    </div>
  );
};
