import React from 'react';
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';


export const MuiSpeedDial = () => {
  return (
    <SpeedDial
    ariaLabel='Navigation speed dial'
    sx={{position: 'absolute', bottom:16, right:16}}
    icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle='Copy' />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' />
    </SpeedDial>

  )
}