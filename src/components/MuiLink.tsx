import React from 'react';
import { Link, Stack, Typography } from '@mui/material';

export const MuiLink = () => {
  return (
      <Stack spacing={2} direction="row" m={4}>
          <Link href="#" variant='h6'>Link1</Link>
          <Typography variant='h6'>
          
              <Link href="#" color="secondary" underline="none"> 
              {/* underline="hover" */}
                Link2
              </Link>
          </Typography>
      </Stack>
  )
}
