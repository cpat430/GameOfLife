import { useContext } from "react";
import { TYPES } from "../constants";
import { StructureContext } from "../providers/StructureContext";

export const StructureType = () => {
  const { setStructure } = useContext(StructureContext);

  const handleChange = (event: any) => {
    const { value } = event.target;

    setStructure(value);
  };

  return (
    <div>
      <form onChange={handleChange}>
        <label>Structure Types: </label>
        <select>
          {TYPES.map((type) => {
            return <option value={type}>{type}</option>;
          })}
        </select>
      </form>
    </div>
  );
};
