import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SelectTextField from './SelectTextField';
import { labName, selectYear, selectMonth } from '../data/ObjectArrayData';
import BasicButton from './BasicButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, margin: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <SelectTextField label='시험실 구분' defaultValue={labName[0].value} data={labName}/>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <SelectTextField label='조회연도' defaultValue={selectYear[0].value} data={selectYear}/>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <SelectTextField label='조회월' defaultValue={selectMonth[0].value} data={selectMonth}/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <BasicButton/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}