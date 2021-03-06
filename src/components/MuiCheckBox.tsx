import React from 'react';
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {useState} from 'react';

export const MuiCheckBox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  console.log({skills});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(e.target.checked)
  }
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value)
      if(index === -1) {
        setSkills([...skills, e.target.value])
      } else {
        setSkills(skills.filter((skill) => skill !== e.target.value))
      }
  }
  return (
    <Box>
      <FormControlLabel 
      label="I accept terms and conditions" 
      control={<Checkbox size="small" color="secondary" checked={acceptTnc} onChange={handleChange} />} 
      />
      <Box>
        <Checkbox 
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
          <FormControl>
              <FormLabel>Skills</FormLabel>
                <FormGroup row>
                <FormControlLabel 
                    label="HTML" 
                    control={<Checkbox value="html" checked={skills.includes('html')} onChange={handleSkillChange} />} 
                    />
                    <FormControlLabel 
                    label="CSS" 
                    control={<Checkbox value="css" checked={skills.includes('css')} onChange={handleSkillChange} />} 
                    />
                    <FormControlLabel 
                    label="JavaScript" 
                    control={<Checkbox value="javascript" checked={skills.includes('javascript')} onChange={handleSkillChange} />} 
                    />
                </FormGroup>
          </FormControl>
      </Box>
    </Box>
  )
}
