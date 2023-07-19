import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SelectTextField from './SelectTextField';
import { labName, selectYear, selectMonth } from '../data/ObjectArrayData';
import BasicButton from './BasicButton';
import axios from 'axios';

// Item 정의 : Paper 사용
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
  const [responseData, setResponseData] = useState(null);

  // 시험실 구분 SelectTextField의 값이 변경되었을 때 호출되는 핸들러
  const LabChange = (event) => {
    setLabValue(event.target.value);
  };

  // 조회연도 SelectTextField의 값이 변경되었을 때 호출되는 핸들러
  const YearChange = (event) => {
    setYearValue(event.target.value);
  };

  // 조회월 SelectTextField의 값이 변경되었을 때 호출되는 핸들러
  const MonthChange = (event) => {
    setMonthValue(event.target.value);
  };

  // 시험실 구분, 조회연도, 조회월 value값 전달
  const ButtonClickSearch = () => {
    alert('보낼 데이터: '+labValue+' / '+yearValue+' / '+monthValue);
    
    // axios 통신
    axios({
      method: 'get',
      url: 'http://localhost:3000/monthlyLabEnvironData',
      params: {
        labValue: labValue,
        yearValue: yearValue,
        monthValue: monthValue
      }
    })
    .then(function (response) {
      console.log(response);
      setResponseData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <SelectTextField 
                label='시험실 구분' 
                defaultValue={labName[0].value} 
                data={labName} 
                value={labValue} 
                onChange={LabChange}/>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <SelectTextField 
                label='조회연도' 
                defaultValue={selectYear[0].value} 
                data={selectYear} 
                value={yearValue} 
                onChange={YearChange}/>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <SelectTextField 
                label='조회월' 
                defaultValue={selectMonth[0].value} 
                data={selectMonth} 
                value={monthValue} 
                onChange={MonthChange}/>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <BasicButton onClick={ButtonClickSearch}/>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* Search 버튼 클릭 후 데이터 디스플레이 */}
      {responseData && (
        <Item sx={{ p: 2, margin: 4 }}>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </Item>
      )}
    </>
  );
}