import React, { useContext } from 'react';
import axios from 'axios';

import { Button } from '@mui/material';

import { GAME_OF_LIFE_MULTITHREAD_URI } from '../constants';
import { GridContext } from '../providers/GridContext';
import { MutantContext } from '../providers/MutantContext';

export const CalculateStateButton: React.FC = () => {
  const { grid, setGrid } = useContext(GridContext);
  const { isMutant } = useContext(MutantContext);

  const getNextState = async () => {
    const response = await axios.post(
      GAME_OF_LIFE_MULTITHREAD_URI + `?isMutant=${isMutant}`,
      { currentBoard: grid }
    );
    const { data } = response;
    setGrid(data);
  };

  return (
    <div>
      <Button variant="outlined" onClick={getNextState}>
        Calculate Next State
      </Button>
    </div>
  );
};
