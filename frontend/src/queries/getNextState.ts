import axios from 'axios';

import { GAME_OF_LIFE_MULTITHREAD_URI } from '../constants';

export const getNextState = async (grid: number[][], isMutant: boolean) => {
  // @TODO: set up openapi docs for this endpoint for types
  const response = await axios.post(
    GAME_OF_LIFE_MULTITHREAD_URI + `?isMutant=${isMutant}`,
    { currentBoard: grid }
  );
  const { data } = response;
  return data;
};
