import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function SelectTextField({label, defaultValue, value, onChange, data}) {

  return (
    <TextField
      id="outlined-select-currency"
      select
      fullWidth
      label={label}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    >
      {data.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}