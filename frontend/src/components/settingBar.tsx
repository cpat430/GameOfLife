import { useState } from "react";
import { GridSize } from "./gridSize";
import { RandomiseBacteria } from "./randomiseBacteria";
import { StructureType } from "./structureType";

export const SettingsBar = ({
  setGridSize,
}: {
  setGridSize: (gridSize: number) => void;
}) => {
  const [bacteriaPercentage, setBacteriaPercentage] = useState<number>(0.5);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "80%",
      }}
    >
      <GridSize setGridSize={setGridSize} />
      <RandomiseBacteria
        bacteriaPercentage={bacteriaPercentage}
        setBacteriaPercentage={setBacteriaPercentage}
      />
      <StructureType />
    </div>
  );
};
