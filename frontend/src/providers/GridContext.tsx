import React, { useState } from "react";

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
};

const initialState: GridContextType = {
  grid: [],
  setGrid: () => {},
  updateGrid: () => {},
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

  const updateGrid = ({
    i,
    j,
    value,
  }: {
    i: number;
    j: number;
    value: number;
  }) => {
    const newGrid = [...grid];
    newGrid[i][j] = value;
    setGrid(newGrid);
  };

  // The context value that will be supplied to any descendants of this component.
  const context = {
    grid,
    setGrid,
    updateGrid,
  };

  // Wraps the given child components in a Provider for the above context.
  return (
    <GridContext.Provider value={context}>{children}</GridContext.Provider>
  );
};

export { GridContext, GridContextProvider };
