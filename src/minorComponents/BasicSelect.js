import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({label, data, onChange, value}) {
  
  return (
    <>
      <FormControl fullWidth sx={{ height: '100%' }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={onChange}
        >
          {data && data.length > 0 ? (
            data.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))
          ) : (
            <MenuItem>데이터가 없습니다.</MenuItem>
          )}
        </Select>
      </FormControl>
    </>
  );

}