import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from '@mui/material'
import {useState} from 'react';

export const MuiRadioButton = () => {
  const [ value, setValue] = useState('')
  console.log({value});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <Box>
      <FormControl >
          <FormLabel id="job-experience-group label">
              Years of experience
          </FormLabel>
          <RadioGroup name="job-experience group"
          aria-labelledby='job-experience-group label'
          value={value}
          onChange={handleChange}
          row
          >
              <FormControlLabel control={<Radio size="small" color="secondary"/>} label='0-2' value='0-2' />
              <FormControlLabel control={<Radio size="medium" />} label='3-5' value='3-5' />
              <FormControlLabel control={<Radio size="small" />} label='6-10' value='6-10' />
          </RadioGroup>
          <FormHelperText error>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  )
}
