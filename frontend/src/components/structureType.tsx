import React, { useState, useContext } from "react";
import { TYPES } from "../constants";
import { StructureContext } from "../providers/StructureContext";
import { Menu, MenuItem, Button, Typography } from "@material-ui/core";

export const StructureType = () => {
  const { structure, setStructure } = useContext(StructureContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: any) => {
    const { value } = event.target;

    setStructure(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    if (event.target.innerText) {
      setStructure(event.target.innerText);
    }
    setAnchorEl(null);
  };

  return (
    <div style={{ padding: "5px" }}>
      <form onChange={handleChange} style={{}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
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
          {TYPES.map((type) => {
            return <MenuItem onClick={handleClose}>{type}</MenuItem>;
          })}
        </Menu>
      </form>
    </div>
  );
};
