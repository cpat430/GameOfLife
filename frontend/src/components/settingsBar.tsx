import React, { useState } from 'react';

import { Box } from '@mui/material';

import { GridSizeInput } from './gridSizeInput';
import { MutantToggle } from './mutantToggle';
import { RandomiseBacteriaButton } from './randomiseBacteriaButton';
import { ResetGridButton } from './resetGridButton';
import { StructureType } from './structureType';

type SettingsBarProps = {
  setGridSize: (gridSize: number) => void;
};

export const SettingsBar: React.FC<SettingsBarProps> = (
  props: SettingsBarProps
) => {
  const { setGridSize } = props;

  const [bacteriaPercentage, setBacteriaPercentage] = useState<number>(0.5);

  return (
    // TODO: update this to use a mui grid
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '80%',
        alignItems: 'center',
      }}
    >
      <RandomiseBacteriaButton
        bacteriaPercentage={bacteriaPercentage}
        setBacteriaPercentage={setBacteriaPercentage}
      />
      <GridSizeInput setGridSize={setGridSize} />
      <StructureType />
      <MutantToggle />
      <ResetGridButton />
    </Box>
  );
};
