import React from 'react';
import {Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row' p={4}>
        <Badge badgeContent={3} color='primary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={5} color='secondary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={200} color='primary' max={999}>
            <MailIcon />
        </Badge>
        <Badge variant='dot' color='primary' invisible={true}>
            <MailIcon />
        </Badge>
    </Stack>
  )
}
 