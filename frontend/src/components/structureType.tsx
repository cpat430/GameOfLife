import React, { useState, useContext } from 'react';
import { TYPES } from '../constants';
import { StructureContext } from '../providers/StructureContext';
import { Menu, MenuItem, Button, Typography } from '@mui/material';

export const StructureType: React.FC = () => {
  const { structure, setStructure } = useContext(StructureContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    const { value } = event.target;

    setStructure(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClose = (event: any) => {
    if (event.target.innerText) {
      setStructure(event.target.innerText);
    }
    setAnchorEl(null);
  };

  return (
    <div style={{ padding: '5px' }}>
      <form onChange={handleChange} style={{}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle2">Structure Types: </Typography>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {structure}
          </Button>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          {TYPES.map((type, idx) => {
            return (
              <MenuItem key={idx} onClick={handleClose}>
                {type}
              </MenuItem>
            );
          })}
        </Menu>
      </form>
    </div>
  );
};
