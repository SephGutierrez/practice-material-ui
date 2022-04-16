import React from 'react';
import {Stack, TextField} from '@mui/material';
import {useState} from 'react';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/lab';

export const MuiPicker = () => {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)
  
  console.log({selectedTime: selectedTime && selectedTime?.toLocaleTimeString()
  })
  return (
    <Stack spacing={4} sx={{width: '250px'}} >
      <DatePicker
      label="Date Picker"
      renderInput={(params) => <TextField {...params} />}
      value={selectedDate}
      onChange={(newValue) => {
        setSelectedDate(newValue)
      }}
      />

      <TimePicker
            label="Time Picker"
            renderInput={(params) => <TextField {...params} />}
            value={selectedTime}
            onChange={(newValue) => {
              setSelectedTime(newValue)
            }}
      />

      <DateTimePicker
                  label="DateTime Picker"
                  renderInput={(params) => <TextField {...params} />}
                  value={selectedDateTime}
                  onChange={(newValue) => {
                    setSelectedDateTime(newValue)
                  }}
            />
    </Stack>
  )
}
