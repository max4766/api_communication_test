import * as React from 'react';
import { useState } from 'react';
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

  const [labValue, setLabValue] = useState(labName[0].value);
  const [yearValue, setYearValue] = useState(selectYear[0].value);
  const [monthValue, setMonthValue] = useState(selectMonth[0].value);

  // 시험실 구분 SelectTextField의 값이 변경되었을 때 호출되는 핸들러
  const handleLabChange = (event) => {
    setLabValue(event.target.value);
  };

  // 조회연도 SelectTextField의 값이 변경되었을 때 호출되는 핸들러
  const handleYearChange = (event) => {
    setYearValue(event.target.value);
  };

  // 조회월 SelectTextField의 값이 변경되었을 때 호출되는 핸들러
  const handleMonthChange = (event) => {
    setMonthValue(event.target.value);
  };

  const ButtonClickSearch = () => {
    alert('보낼 데이터: '+labValue+' / '+yearValue+' / '+monthValue);
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <SelectTextField 
              label='시험실 구분' 
              defaultValue={labName[0].value} 
              data={labName} 
              value={labValue} 
              onChange={handleLabChange}/>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <SelectTextField 
              label='조회연도' 
              defaultValue={selectYear[0].value} 
              data={selectYear} 
              value={yearValue} 
              onChange={handleYearChange}/>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <SelectTextField 
              label='조회월' 
              defaultValue={selectMonth[0].value} 
              data={selectMonth} 
              value={monthValue} 
              onChange={handleMonthChange}/>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <BasicButton onClick={ButtonClickSearch}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}