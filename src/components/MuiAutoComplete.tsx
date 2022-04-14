import React from 'react';
import {Stack, Autocomplete, TextField} from '@mui/material';
import {useState} from 'react';


type Skill = {
  id: number
  label: string
}
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))

export const MuiAutoComplete = () => {
  
 
  const [value, setValue] = useState<string | null>(null)
  console.log({value});
  const [skill, setSkill] = useState<Skill | null>(null)
  console.log({skill});
  
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete 
      options={skills}
      renderInput={(params) => <TextField {...params} label="Skills" 
      color="secondary" size="small" />}
      value={value}
      onChange={(e: any, newValue: string | null) => setValue(newValue)}
      // freeSolo
       />
       <Autocomplete 
      options={skillsOptions}
      renderInput={(params) => <TextField {...params} label="Skills" 
      color="secondary" size="small" />}
      value={skill}
      onChange={(e: any, newValue: Skill | null) => setSkill(newValue)}
      // freeSolo
       />
    </Stack>
  )
}
