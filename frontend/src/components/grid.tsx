import React, { useContext, useEffect } from 'react';

import { Box } from '@mui/material';

import { GridContext } from '../providers/GridContext';

import { Cell } from './cell';

const initGrid = (props: GridProps) => {
  const { rows, cols } = props;
  const newGrid: number[][] = [];

  for (let i = 0; i < rows; i++) {
    newGrid[i] = [];
    for (let j = 0; j < cols; j++) {
      newGrid[i][j] = 0;
    }
  }

  return newGrid;
};

type GridProps = {
  rows: number;
  cols: number;
  gridDimensions?: number;
};

export const Grid: React.FC<GridProps> = (props: GridProps) => {
  const { rows, cols, gridDimensions } = props;

  const { grid, setGrid } = useContext(GridContext);

  const cellHeight = gridDimensions || 0 / rows;
  const cellWidth = gridDimensions || 0 / cols;

  useEffect(() => {
    setGrid(initGrid({ rows, cols }));
  }, [rows, cols, setGrid]);

  return (
    <>
      <div id="grid">
        {grid.map((row, idx) => {
          return (
            <Box sx={{ display: 'flex' }} key={idx}>
              {row.map((ele, jdx) => {
                return (
                  <Cell
                    key={idx + '' + jdx}
                    initialValue={ele}
                    cellHeight={cellHeight}
                    cellWidth={cellWidth}
                    i={idx}
                    j={jdx}
                  />
                );
              })}
            </Box>
          );
        })}
      </div>
    </>
  );
};
