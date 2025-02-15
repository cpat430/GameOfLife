import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { GridContext } from '../providers/GridContext';

export const ResetGridButton: React.FC = () => {
  const { resetGrid } = useContext(GridContext);

  const handleClick = () => {
    resetGrid();
  };
  return (
    <div style={{ padding: '5px' }}>
      <Button onClick={handleClick}>Reset Grid</Button>
    </div>
  );
};
