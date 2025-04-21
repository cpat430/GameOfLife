import axios from 'axios';

import { BoardResponse } from '../api/backend/models';
import { GAME_OF_LIFE_MULTITHREAD_URI } from '../constants';

export const getNextState = async (
  grid: number[][],
  isMutant: boolean
): Promise<BoardResponse['nextBoard']> => {
  const {
    data: { nextBoard },
  } = await axios.post<BoardResponse>(
    GAME_OF_LIFE_MULTITHREAD_URI + `?isMutant=${isMutant}`,
    { currentBoard: grid }
  );

  return nextBoard;
};
