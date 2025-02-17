import React, { useContext } from 'react';

import { Checkbox, FormControlLabel, Stack } from '@mui/material';

import { MutantContext } from '../providers/MutantContext';

export const MutantToggle: React.FC = () => {
  const { isMutant, setIsMutant } = useContext(MutantContext);

  const handleChange = () => {
    setIsMutant(!isMutant);
  };

  return (
    <Stack p="5px">
      <FormControlLabel
        control={<Checkbox checked={isMutant} onChange={handleChange} />}
        label="Mutants Allowed?"
        labelPlacement="start"
      />
    </Stack>
  );
};
