import React from 'react';
import { AppBar, Toolbar, IconButton , Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useState} from 'react';


export const MuiNavbar = () => {

  const [anchorSolutions, setAnchorSolutions] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorSolutions)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { 
    setAnchorSolutions(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorSolutions(null)
  }

  const [anchorCommunity, setAnchorCommunity] = useState<null | HTMLElement>(null)
  const openCommunity = Boolean(anchorCommunity)
  const handleClickCommunity = (e: React.MouseEvent<HTMLButtonElement>) => { 
    setAnchorCommunity(e.currentTarget)
  }
  const handleCloseCommunity = () => {
    setAnchorCommunity(null)
  }

  return (
    <AppBar position="static" >
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo"> 
                <CatchingPokemonIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              OPSOLUTIONS
            </Typography>

            <Stack direction="row" spacing={2}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit" id="solutions-btn" onClick={handleClick}
                aria-controls={open ? 'true' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                endIcon={<ArrowDropDownIcon />}
                >Solutions</Button>
                <Button color="inherit">Customers</Button>     
                <Button color="inherit" id="community-btn" onClick={handleClickCommunity}
                aria-controls={open ? 'true' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                endIcon={<ArrowDropDownIcon />}
                >Community</Button>
                <Button color="inherit">Careers</Button>
                <Button color="inherit" variant="outlined">Contact Us</Button>
            </Stack>

            <Menu id="solutions-menu" anchorEl={anchorSolutions} open={open}
              MenuListProps={{'aria-labelledby' : 'solutions-btn'}}
              onClose={handleClose}
              anchorOrigin= {{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin= {{ 
                vertical: 'top',
                horizontal: 'right'
              }}
            >
                <MenuItem onClick={handleClose}>What we do</MenuItem>
                <MenuItem onClick={handleClose}>Case studies</MenuItem>
            </Menu>

            <Menu id="community-menu" anchorEl={anchorCommunity} open={openCommunity}
              MenuListProps={{'aria-labelledby' : 'community-btn'}}
              onClose={handleCloseCommunity}
              anchorOrigin= {{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin= {{ 
                vertical: 'top',
                horizontal: 'right'
              }}
            >
                <MenuItem onClick={handleCloseCommunity}>Insights</MenuItem>
                <MenuItem onClick={handleCloseCommunity}>Events</MenuItem>
                <MenuItem onClick={handleCloseCommunity}>Newsletter</MenuItem>
            </Menu>

        </Toolbar>
    </AppBar> 
  )
}
 