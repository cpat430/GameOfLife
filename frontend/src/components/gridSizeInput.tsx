import React from 'react';

import { TextField } from '@mui/material';

type GridSizeInputProps = {
  setGridSize: (gridSize: number) => void;
};

export const GridSizeInput: React.FC<GridSizeInputProps> = (
  props: GridSizeInputProps
) => {
  const { setGridSize } = props;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!event.target.value) return;
    const targetValue = parseInt(event.target.value);

    if (targetValue > 30) {
      event.target.value = '30';
    } else if (targetValue <= 0) {
      event.target.value = '1';
    }

    setGridSize(targetValue);
  };

  return (
    <div style={{ padding: '5px' }}>
      <TextField
        id="standard-basic"
        label="Grid Size"
        type="number"
        onChange={handleChange}
      />
    </div>
  );
};
