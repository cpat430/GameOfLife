import { useContext } from "react";
import { MutantContext } from "../providers/MutantContext";

export const MutantToggle = () => {
  const { isMutant, setIsMutant } = useContext(MutantContext);

  const handleChange = () => {
    setIsMutant(!isMutant);
  };

  return (
    <div>
      <label>Mutants Allowed? </label>
      <input
        type="checkbox"
        onChange={handleChange}
        defaultChecked={isMutant}
      ></input>
    </div>
  );
};
