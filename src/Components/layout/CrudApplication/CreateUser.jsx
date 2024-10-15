import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; 
import "./CreateUser.css"

export default function CalendarTextField() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <div className='Create'>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          '& > :not(style)': { m: 2, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="User" variant="filled" />
        <TextField id="standard-basic" label="project" variant="standard" />
        <DatePicker
          label="Outlined with Calendar"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
      </Box>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Create
      </Button>
      <Button variant="outlined" color="error">
        Cancel
      </Button>
    </Stack>
      </div>
    </LocalizationProvider>
  );
}
