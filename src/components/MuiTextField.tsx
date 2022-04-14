import {Stack, TextField, InputAdornment} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from 'react';

export const MuiTextField = () => {
  const [value, setValue] = useState('')
 
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant='outlined'/>
        <TextField label="Location" variant='standard'/>
        <TextField label="Zip Code" variant='filled'/>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Primary" size="small" color="primary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
         label="Password"
         helperText={!value ? 'Required' : 'Please choose strong'}
         required
         type="password"
         value={value}
         onChange={(e) => setValue(e.target.value)}
         error={!value}
         InputProps={{endAdornment: <InputAdornment position="end">
          <VisibilityOffIcon />
        </InputAdornment>}}
        />
        <TextField label="Read only" InputProps={{readOnly: true}} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Amount"
        InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
        />
         <TextField label="Percentage"
        InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}}
        />
      </Stack>
    </Stack>
  )
}
 