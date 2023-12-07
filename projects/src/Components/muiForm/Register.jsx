import React, { useState } from 'react'
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, Paper, TextField, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
      >

        <Paper elevation={3} style={{ padding: '30px 0px' }}>

          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>

          <FormControl>
            <TextField id="standard-basic" label="First Name" variant="standard" />
            <TextField id="standard-basic" label="Last Name" variant="standard" />
            <TextField id="standard-basic" label="Email ID" variant="standard" />
          </FormControl>

          <Box sx={{ marginLeft: '20px', width: '41.5ch' }} display='flex'>
            <TextField label="Select country" select>
              <MenuItem value="IN" >INDIA</MenuItem>
              <MenuItem value="US">USA</MenuItem>
              <MenuItem value="AU">Austraia</MenuItem>
            </TextField >
            <TextField type='number'>

            </TextField>
          </Box>

          <FormControl sx={{ m: 1, width: '40ch' }} variant="standard" >
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              startAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
            <Button variant="contained" >
              Sign Up
            </Button>
          </FormControl>

          <Button size='small' onClick={() => router("/login")} style={{ cursor: 'pointer' }}>
            Already Register? Click here to sign in
          </Button>

        </Paper>
      </Box >
    </div>
  )
}

export default Register
