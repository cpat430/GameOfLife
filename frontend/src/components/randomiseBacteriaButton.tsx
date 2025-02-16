import React, { useContext } from 'react';

import { Button, Slider, Stack, Typography } from '@mui/material';

import { ALIVE, DEAD, MUTANT } from '../constants';
import { GridContext } from '../providers/GridContext';
import { MutantContext } from '../providers/MutantContext';

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

type RandomiseBacteriaButtonProps = {
  bacteriaPercentage: number;
  setBacteriaPercentage: (percentage: number) => void;
};

export const RandomiseBacteriaButton: React.FC<RandomiseBacteriaButtonProps> = (
  props: RandomiseBacteriaButtonProps
) => {
  const { bacteriaPercentage, setBacteriaPercentage } = props;
  const { grid, setGrid } = useContext(GridContext);
  const { isMutant } = useContext(MutantContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePercentageChange = (event: any, newValue: number | number[]) => {
    setBacteriaPercentage(newValue as number);
  };

  return (
    <Stack flexGrow={3}>
      <div>
        <Typography
          style={{ whiteSpace: 'nowrap', paddingRight: '10px' }}
          variant="subtitle2"
        >
          Bacteria Percentage:
        </Typography>
        <Slider
          defaultValue={0.5}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={0.1}
          marks
          min={0}
          max={1}
          sx={{ width: '100%' }}
          onChange={handlePercentageChange}
        />
      </div>
      <Button
        style={{ whiteSpace: 'nowrap' }}
        onClick={() =>
          randomiseBoard(grid, setGrid, bacteriaPercentage, isMutant)
        }
      >
        Randomise the board!
      </Button>
    </Stack>
  );
};
