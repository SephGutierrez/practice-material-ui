import React from 'react'
import {Stack} from '@mui/material'
import {LoadingButton} from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save'

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant='outlined'> Agree</LoadingButton>
      <LoadingButton loading variant='outlined' >Submit</LoadingButton>

      <LoadingButton loadingIndicator='Loading....' variant='outlined'> Agree</LoadingButton>
      <LoadingButton loading loadingIndicator='Loading....' variant='outlined'> Agree</LoadingButton>
      <LoadingButton
       variant='outlined'
       loadingPosition='start'
       startIcon={<SaveIcon />}
       >Save</LoadingButton>

        <LoadingButton
       variant='outlined'
       loading
       loadingPosition='start'
       startIcon={<SaveIcon />}
       >Save</LoadingButton>
    </Stack>
  )
}
