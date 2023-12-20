import { Container, InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'

const MuiTextField = () => {
  return (
    <Container spacing={4}>
      <Stack direction='row' spacing={2} marginTop='20px'>
        <TextField label='Outlined' variant='outlined' />
        <TextField label='Filled' variant='filled' />
        <TextField label='Standard' variant='standard' />
      </Stack>

      <Stack direction='row' spacing={2} marginTop='20px'>
        <TextField label='Default' />
        <TextField label='Small' size='small' />
      </Stack>

      <Stack direction='row' spacing={2} marginTop='20px' >
        <TextField label='Primary' color='primary' />
        <TextField label='Secondary' color='secondary' />
        <TextField label='Success' color='success' />
      </Stack>
      <Stack direction='row' spacing={2} marginTop='20px' >
        <TextField label='Warning' color='warning' />
        <TextField label='Info' color='info' />
        <TextField label='Error' color='error' />
      </Stack>

      <Stack direction='row' spacing={2} marginTop='20px' >
        <TextField label='Required & Error' required error/>
        <TextField label='Helper Text' helperText='Disclaimer' />
        <TextField label='Password' type='password' />
      </Stack>

      <Stack direction='row' spacing={2} marginTop='20px' >
        <TextField label='Read Only' InputProps={{ readOnly: true }} value='Hello' />
        <TextField label='Input Adornment start' InputProps={{ startAdornment: <InputAdornment position='start'>#</InputAdornment> }} />
        <TextField label='Input Adornment end' InputProps={{ endAdornment: <InputAdornment position='end'>$</InputAdornment> }} />
      </Stack>

    </Container>
  )
}

export default MuiTextField
