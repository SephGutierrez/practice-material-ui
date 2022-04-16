import React from 'react';
import {Box, Tab} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {useState} from 'react';
import Favorite from '@mui/icons-material/Favorite';

export const MuiTabs = () => {
  const [value, setValue] = useState('1')
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box>
        <TabContext value={value}>
          <Box sx={{borderBottom: 1, borderColor: 'divider', width:'400px'}} >
          <TabList aria-label='Tabs example' onChange={handleChange}
          textColor='secondary'
          indicatorColor='secondary'
          variant='scrollable'
          scrollButtons='auto'
          >
              <Tab label='Tab One' value='1' icon={<Favorite />} iconPosition='start' />
              <Tab label='Tab Two' value='2' />
              <Tab label='Tab Three' value='3' />
              <Tab label='Tab Four' value='4' />
              <Tab label='Tab Five' value='5' />
              <Tab label='Tab Six' value='6' />
              <Tab label='Tab Seven' value='7' />
          </TabList>
        </Box>
        <TabPanel value='1'>Panel ONE</TabPanel>
        <TabPanel value='2'>Panel TWO</TabPanel>
        <TabPanel value='3'>Panel THREE</TabPanel>
        <TabPanel value='4'>Panel FOUR</TabPanel>
        <TabPanel value='5'>Panel Five</TabPanel>
        <TabPanel value='6'>Panel Six</TabPanel>
        <TabPanel value='7'>Panel Seven</TabPanel>
        </TabContext>
    </Box>
    
  ) 
}
