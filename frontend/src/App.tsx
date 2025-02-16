import React, { useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { CalculateStateButton } from './components/calculateStateButton';
import { Grid } from './components/grid';
import { SettingsBar } from './components/settingsBar';
import { DEFAULT_GRID_SIZE } from './constants';

import './App.css';

const App: React.FC = () => {
  const gridHeight = window.innerHeight * 0.7;

  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID_SIZE);

  return (
    <Stack alignItems="center">
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h2">Conways Game of Life</Typography>
      </div>
      <Stack>
        <Grid
          rows={gridSize}
          cols={gridSize}
          gridDimensions={gridHeight / gridSize}
        />
      </Stack>
      <Stack>
        <SettingsBar setGridSize={setGridSize} />
      </Stack>
      <Stack>
        <CalculateStateButton />
      </Stack>
    </Stack>
  );
};

export default App;
