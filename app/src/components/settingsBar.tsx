import React, { useState } from 'react';
import { GridSizeInput } from './gridSizeInput';
import { RandomiseBacteriaButton } from './randomiseBacteriaButton';
import { StructureType } from './structureType';
import { MutantToggle } from './mutantToggle';
import { Box } from '@mui/material';
import { ResetGridButton } from './resetGridButton';

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
