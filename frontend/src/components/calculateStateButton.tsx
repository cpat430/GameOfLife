import React, { useContext } from "react";
import axios from "axios";
import { GAME_OF_LIFE_URI } from "../constants";
import { GridContext } from "../providers/GridContext";
import { MutantContext } from "../providers/MutantContext";
import { Button } from "@material-ui/core";

export const CalculateStateButton = () => {
  const { grid, setGrid } = useContext(GridContext);
  const { isMutant } = useContext(MutantContext);

  const getNextState = async () => {
    const response = await axios.post(
      GAME_OF_LIFE_URI + `?isMutant=${isMutant}`,
      grid
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
