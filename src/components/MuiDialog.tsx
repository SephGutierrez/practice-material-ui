import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent,
DialogContentText, DialogActions
} from '@mui/material';
import {useState} from 'react';


export const MuiDialog = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
    <Button onClick={()=> setOpen(true)}>Open Dialog</Button>
    <Dialog
    open={open}
    onClose={()=> setOpen(false)}
    aria-labelledby="dialog-title" aria-describedby="dialog-desc">
        <DialogTitle id='dialog-title' >Submit the form?</DialogTitle>
          <DialogContent>
              <DialogContentText id='dialog-desc' >Are you sure you want to submit the form?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=> setOpen(false)} >Cancel</Button>
            <Button onClick={()=> setOpen(false)}  autoFocus >Submit</Button>
          </DialogActions>
    </Dialog>
    </>
  )
}
