import axios from "axios";
import React, { useState, useContext } from "react";
import { DEAD, STRUCTURE_URI } from "../constants";
import { StructureContext } from "./StructureContext";

const ob = (i: number, n: number) => {
  if (i < 0 || i >= n) {
    return true;
  }

  return false;
};

type GridContextType = {
  grid: number[][];
  setGrid: (grid: number[][]) => void;
  updateGrid: ({
    i,
    j,
    value,
  }: {
    i: number;
    j: number;
    value: number;
  }) => void;
  resetGrid: () => void;
};

const initialState: GridContextType = {
  grid: [],
  setGrid: () => [],
  updateGrid: () => [],
  resetGrid: () => [],
};

// creating a context for the access token so it is available for all components.
const GridContext = React.createContext<GridContextType>(initialState);

/**
 * Gives all children to this component access to the access token.
 *
 * @param {React.Component[]} children
 * @returns the context provider.
 */
const GridContextProvider: React.FC = ({ children }) => {
  const [grid, setGrid] = useState<number[][]>([]);

  const { structure } = useContext(StructureContext);

  const updateGrid = async ({
    i,
    j,
    value,
  }: {
    i: number;
    j: number;
    value: number;
  }) => {
    const newGrid = [...grid];
    const n = newGrid.length;
    const m = newGrid[0].length;

    if (structure === "none") {
      newGrid[i][j] = value;
    } else {
      // get the structure from the server
      const response = await axios.get(STRUCTURE_URI, {
        params: {
          structureName: structure,
        },
      });

      const { data: structureArray } = response;

      // iterate through the data and update the grid
      for (let ii = 0; ii < structureArray.length; ii++) {
        for (let jj = 0; jj < structureArray[0].length; jj++) {
          if (ob(i + ii, n) || ob(j + jj, m)) {
            break;
          }

          newGrid[i + ii][j + jj] = structureArray[ii][jj];
        }
      }
    }

    setGrid(newGrid);
  };

  const resetGrid = () => {
    const newGrid = [...grid];

    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[0].length; j++) {
        newGrid[i][j] = DEAD;
      }
    }
    setGrid(newGrid);
  };

  // The context value that will be supplied to any descendants of this component.
  const context = {
    grid,
    setGrid,
    updateGrid,
    resetGrid,
  };

  // Wraps the given child components in a Provider for the above context.
  return (
    <GridContext.Provider value={context}>{children}</GridContext.Provider>
  );
};

export { GridContext, GridContextProvider };
