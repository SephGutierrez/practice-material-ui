import React from 'react';
import {Box, TextField, MenuItem} from '@mui/material';
import {useState} from 'react';

export const MuiSelect = () => {
  const [country, setCountry] = useState('')
  console.log({country});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string)
  }
  return (
    <Box width="250px">
        <TextField 
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
         >
            <MenuItem value="PH">Philippines</MenuItem>
            <MenuItem value="SG">Singapore</MenuItem>
            <MenuItem value="HK">Hong Kong</MenuItem>
            <MenuItem value="CN">China</MenuItem>
        </TextField>
    </Box>
  )
}
