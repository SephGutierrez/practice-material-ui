import React from 'react';
import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListItemButton, Divider} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export const MuiList = () => {
  return (
    <Box sx={{width: '480px', bgcolor: 'pink'}}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 1"  />
          </ListItemButton>
        </ListItem>
          <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="Secondary text 2"/>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 3"  />
        </ListItem>
      </List>
    </Box>

  )
}