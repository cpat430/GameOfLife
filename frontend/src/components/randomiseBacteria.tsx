import { useContext } from "react";
import { ALIVE, DEAD, MUTANT } from "../constants";
import { GridContext } from "../providers/GridContext";
import { MutantContext } from "../providers/MutantContext";

export const RandomiseBacteria = ({
  bacteriaPercentage,
  setBacteriaPercentage,
}: {
  bacteriaPercentage: number;
  setBacteriaPercentage: (percentage: number) => void;
}) => {
  const { grid, setGrid } = useContext(GridContext);
  const { isMutant } = useContext(MutantContext);

  const handlePercentageChange = (event: any) => {
    if (!event.target.value) return;

    setBacteriaPercentage(event.target.value);
  };

  return (
    <div>
      <label>Bacteria Percentage: </label>
      <input
        type="range"
        value={bacteriaPercentage}
        min="0"
        max="1"
        step="0.05"
        onChange={handlePercentageChange}
      ></input>
      <button
        onClick={() =>
          randomiseBoard(grid, setGrid, bacteriaPercentage, isMutant)
        }
      >
        Randomise the bacteria!
      </button>
    </div>
  );
};

const randomiseBoard = (
  board: number[][],
  setGrid: (board: number[][]) => void,
  percentage: number,
  isMutant: boolean
) => {
  // iterate through the board and create a new board to set to.
  const newBoard = [...board];

  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[0].length; j++) {
      const rand = Math.random();

      if (rand <= percentage) {
        if (isMutant) {
          const randMutant = Math.random();
          newBoard[i][j] = randMutant > 0.1 ? ALIVE : MUTANT;
        } else {
          newBoard[i][j] = ALIVE;
        }
      } else {
        newBoard[i][j] = DEAD;
      }
    }
  }

  setGrid(newBoard);
};
