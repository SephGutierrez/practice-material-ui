import React from 'react';
import {Stack, Alert, AlertTitle, Button} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error"
      onClose={() => alert('Close alert')}
      > This is an error. </Alert>
      <Alert severity="warning"> This is an warning. </Alert>
      <Alert severity="info"> This is an info. </Alert>
      <Alert severity="success"> This is an success. </Alert>

      <Alert variant="outlined" severity="error">
         <AlertTitle>Error</AlertTitle>
         This is an error. 
         </Alert>
      <Alert variant="outlined" severity="warning"> 
      <AlertTitle>Warning</AlertTitle>
      This is an warning. 
      </Alert>
      <Alert variant="outlined" severity="info"> This is an info. </Alert>
      <Alert variant="outlined" severity="success"
      icon={<CheckIcon fontSize='inherit' />}
      > This is an success. </Alert>

      <Alert variant="filled" severity="error"> This is an error. </Alert>
      <Alert variant="filled" severity="warning"> This is an warning. </Alert>
      <Alert variant="filled" severity="info">
      <AlertTitle>Info</AlertTitle>
         This is an info. 
         </Alert>
      <Alert variant="filled" severity="success"> 
      <AlertTitle>Success</AlertTitle>
      This is an success. 
      </Alert>
    </Stack>

  )
}
