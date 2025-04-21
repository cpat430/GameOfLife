import React from 'react';

import { Button } from '@mui/material';

import { useNextState } from '../hooks/useNextState';

export const CalculateStateButton = () => {
  const { fetchNextState, isLoading } = useNextState();

  return (
    <div>
      <Button variant="outlined" onClick={fetchNextState} disabled={isLoading}>
        Calculate Next State
      </Button>
    </div>
  );
};
