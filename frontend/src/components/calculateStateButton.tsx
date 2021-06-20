import axios from "axios";
import { useContext } from "react";
import { GridContext } from "../providers/GridContext";

export const CalculateStateButton = () => {
  const { grid, setGrid } = useContext(GridContext);
  // const getNextState = []; // get using axios or something.

  const getNextState = async () => {
    const response = await axios.post(
      "http://localhost:8080/game-of-life",
      grid
    );
    const { data } = response;
    setGrid(data);
  };

  return (
    <div>
      <button onClick={getNextState}>Calculate Next State</button>
    </div>
  );
};
