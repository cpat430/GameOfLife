import axios from "axios";
import { useContext } from "react";
import { GAME_OF_LIFE_URI } from "../constants";
import { GridContext } from "../providers/GridContext";

export const CalculateStateButton = () => {
  const { grid, setGrid } = useContext(GridContext);

  const getNextState = async () => {
    const response = await axios.post(GAME_OF_LIFE_URI, grid);
    const { data } = response;
    setGrid(data);
  };

  return (
    <div>
      <button onClick={getNextState}>Calculate Next State</button>
    </div>
  );
};
