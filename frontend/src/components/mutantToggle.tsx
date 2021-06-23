import { useContext } from "react";
import { MutantContext } from "../providers/MutantContext";
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // padding: "5px",
  },
}));

export const MutantToggle = () => {
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
