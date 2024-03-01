import React from 'react';
import { FormGroup, TextField } from '@mui/material';

interface DataComponentProps { }

const DataComponent: React.FC<DataComponentProps> = () => {
  return (
    <FormGroup sx={{ width: "-webkit-fill-available", marginTop: "1rem" }}>
      <TextField
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        color='success'
        disabled
      />
    </FormGroup>
  );
};

export default DataComponent;
