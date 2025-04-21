import { useContext, useState } from 'react';

import { GridContext } from '../providers/GridContext';
import { MutantContext } from '../providers/MutantContext';
import { getNextState } from '../queries/getNextState';

export const useNextState = () => {
  const { grid, setGrid } = useContext(GridContext);
  const { isMutant } = useContext(MutantContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchNextState = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const nextBoard = await getNextState(grid, isMutant);
      setGrid(nextBoard);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    fetchNextState,
  };
};
