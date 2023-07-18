import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButton({ onClick }) {
  return (
    <Button variant="contained" fullWidth sx={{height: '56px'}} onClick={onClick}>Search</Button>
  );
}