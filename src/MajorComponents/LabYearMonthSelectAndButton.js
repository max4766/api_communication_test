import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicButton from "../minorComponents/BasicButton";
import BasicSelect from "../minorComponents/BasicSelect";
import axios from 'axios';

export default function LabYearMonthSelectAndButton(){
  
  const [ labNameDefault, setLabNameDefault ] = useState("");
  const [ labNames, setLabNames ] = useState("");
  const [ yearDefault, setYearDefault ] = useState("");
  const [ years, setYears ] = useState("");
  const [ monthDefault, setMonthDefault ] = useState("");
  const [ months, setMonths ] = useState("");

  useEffect(()=>{
    axios({
      method: 'get',
      url: 'http://localhost:3000/labData'
    })
      .then(function (response) {
        console.log(response.data);
        setLabNameDefault(response.data[0].value);
        setLabNames(response.data);
      })
    axios({
      method: 'get',
      url: 'http://localhost:3000/yearData'
    })
      .then(function (response) {
        console.log(response.data);
        setYearDefault(response.data[0].value);
        setYears(response.data);
      })
    axios({
      method: 'get',
      url: 'http://localhost:3000/monthData'
    })
      .then(function (response) {
        console.log(response.data);
        setMonthDefault(response.data[0].value);
        setMonths(response.data);
      })
  }, []);
  
  const [labNameValue, setLabNameValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [monthValue, setMonthValue] = useState('');

  const labNameValueChange = (event) => {
    setLabNameValue(event.target.value);
  };
  const yearValueChange = (event) => {
    setYearValue(event.target.value);
  };
  const monthValueChange = (event) => {
    setMonthValue(event.target.value);
  };

  const checkReqParam = () => {
    alert('reqParam: '+labNameValue+" / "+yearValue+" / "+monthValue);
  }

  return(
    <Box sx={{ m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <BasicSelect label={labNameDefault} data={labNames} onChange={labNameValueChange} value={labNameValue}/>
        </Grid>
        <Grid item xs={3}>
          <BasicSelect label={yearDefault} data={years} onChange={yearValueChange} value={yearValue}/>
        </Grid>
        <Grid item xs={3}>
          <BasicSelect label={monthDefault} data={months} onChange={monthValueChange} value={monthValue}/>
        </Grid>
        <Grid item xs={3}>
          <BasicButton onClick={checkReqParam}/>
        </Grid>
      </Grid>
    </Box>
  );
}
