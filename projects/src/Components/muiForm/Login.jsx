import React, { useState } from 'react'
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper, TextField, Typography } from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const router = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    return (
        <div >
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' } }}
                noValidate
                autoComplete="off"
            >
                <Paper elevation={3} style={{ padding: '30px 0px' }}>

                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>

                    <FormControl>
                        <TextField id="standard-basic" label="Email ID" variant="standard" />
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

                    <FormControl sx={{ m: 1, width: '40ch',marginTop:'20px' }} variant="standard">
                        <Button variant="contained" >
                            Login
                        </Button>
                    </FormControl>



                    <Button size='small' onClick={() => router("/register")} style={{ cursor: 'pointer' }}>
                        Register Now
                    </Button>

                </Paper>
            </Box >
        </div>
    )
}

export default Login
