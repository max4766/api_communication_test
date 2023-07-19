import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButton({onClick}) {
  return (
    <Button 
      variant="contained" 
      fullWidth 
      sx={{ height: '100%' }}
      onClick={onClick}
    >
      검색
    </Button>
  );
}