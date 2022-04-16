import React from 'react';
import {Box, Paper} from '@mui/material';
import { Masonry } from '@mui/lab';

const heights = [
  10,20,30,40,50,60,80,90,100,110,120,150,200,300,310
]

export const MuiMasonry = () => {
  return (
    <Box sx={{width: 500, minHeight: 400}}>
      <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height,
              border: '1px solid'
            }} 
            >
              {index + 1}
            </Paper>
          ))}
      </Masonry>
    </Box>
  )
}
