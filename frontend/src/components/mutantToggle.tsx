import React, { useContext } from "react";
import { MutantContext } from "../providers/MutantContext";
import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const MutantToggle: React.FC = () => {
  const { isMutant, setIsMutant } = useContext(MutantContext);

  const classes = useStyles();

  const handleChange = () => {
    setIsMutant(!isMutant);
  };

  return (
    <div className={classes.container} style={{ padding: "5px" }}>
      <FormControlLabel
        control={<Checkbox checked={isMutant} onChange={handleChange} />}
        label="Mutants Allowed?"
        labelPlacement="start"
      />
    </div>
  );
};
