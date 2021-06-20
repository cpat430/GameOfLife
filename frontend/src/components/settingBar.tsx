import { useState } from "react";
import { GridSize } from "./gridSize";
import { RandomiseBacteria } from "./randomiseBacteria";

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
        justifyContent: "center",
        width: "80%",
      }}
    >
      <GridSize setGridSize={setGridSize}></GridSize>
      <RandomiseBacteria
        bacteriaPercentage={bacteriaPercentage}
        setBacteriaPercentage={setBacteriaPercentage}
      ></RandomiseBacteria>
    </div>
  );
};
