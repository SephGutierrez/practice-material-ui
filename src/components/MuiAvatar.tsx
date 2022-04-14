import React from 'react';
import {Stack, Avatar, AvatarGroup} from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));


export const MuiAvatar = () => {
  return (
      <>
    <Stack direction="row" spacing={2}>
      <AvatarGroup>
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
     >
       <Avatar 
       src='https://randomuser.me/api/portraits/men/75.jpg'
       alt='random-User-men'
        />
    </StyledBadge>

    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
     >
       <Avatar
        src='https://randomuser.me/api/portraits/women/69.jpg'
        alt='random-User-women'
        />
    </StyledBadge>
   

    <Stack spacing={4}>
          <Stack direction="row" spacing={1}>
              <Avatar sx={{bgcolor: 'primary.light'}} >SG</Avatar>
              <Avatar sx={{bgcolor: 'success.light'}} >PH</Avatar>
          </Stack>
    </Stack>
    </AvatarGroup>
    </Stack>
    </>
  )
}
