import { useState } from "react";
import { GridSizeInput } from "./gridSizeInput";
import { RandomiseBacteriaButton } from "./randomiseBacteriaButton";
import { StructureType } from "./structureType";
import { MutantToggle } from "./mutantToggle";
import { makeStyles } from "@material-ui/core";
import { ResetGridButton } from "./resetGridButton";

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    width: "80%",
  },
}));

type SettingsBarProps = {
  setGridSize: (gridSize: number) => void;
};

export const SettingsBar: React.FC<SettingsBarProps> = (
  props: SettingsBarProps
) => {
  const { setGridSize } = props;

  const [bacteriaPercentage, setBacteriaPercentage] = useState<number>(0.5);

  const classes = useStyles();
  return (
    <div className={classes.grid}>
      <RandomiseBacteriaButton
        bacteriaPercentage={bacteriaPercentage}
        setBacteriaPercentage={setBacteriaPercentage}
      />
      <GridSizeInput setGridSize={setGridSize} />
      <StructureType />
      <MutantToggle />
      <ResetGridButton />
    </div>
  );
};
