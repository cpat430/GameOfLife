import React, { useContext } from 'react';

import { Button } from '@mui/material';

import { GridContext } from '../providers/GridContext';
import { MutantContext } from '../providers/MutantContext';
import { getNextState } from '../queries/getNextState';

export const CalculateStateButton: React.FC = () => {
  const { grid, setGrid } = useContext(GridContext);
  const { isMutant } = useContext(MutantContext);

  const onClick = async () => {
    const data = await getNextState(grid, isMutant);
    setGrid(data);
  };

  return (
    <div>
      <Button variant="outlined" onClick={onClick}>
        Calculate Next State
      </Button>
    </div>
  );
};
