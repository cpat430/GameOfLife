import { Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { ALIVE, DEAD, MUTANT, NUM_TYPES } from '../constants';
import { GridContext } from '../providers/GridContext';

// icons from https://icons8.com/icons/set/bacteria

type CellProps = {
  initialValue: number;
  cellHeight: number;
  cellWidth: number;
  i: number;
  j: number;
};

export const Cell: React.FC<CellProps> = (props: CellProps) => {
  const { initialValue, cellHeight, cellWidth, i, j } = props;

  const [cellValue, setCellValue] = useState<number>(initialValue);

  const { updateGrid } = useContext(GridContext);

  const handleClick = () => {
    const value = (cellValue + 1) % NUM_TYPES;
    updateGrid({ i, j, value });
  };

  useEffect(() => {
    setCellValue(initialValue);
  }, [initialValue]);

  return (
    <Stack
      sx={{
        width: cellWidth,
        height: cellHeight,
        border: '1px solid black',
        backgroundColor: cellValue === DEAD ? 'white' : 'unset',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundImage:
          cellValue === ALIVE
            ? `url(bacteria.png)`
            : cellValue === MUTANT
              ? `url(mutantbacteria.png)`
              : 'unset',
      }}
      onClick={handleClick}
    ></Stack>
  );
};
