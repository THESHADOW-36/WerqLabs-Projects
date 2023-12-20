import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Homepage = () => {
  const router = useNavigate();
  return (
    <Box>
      <Typography variant='h4' onClick={() => router('/typography')} style={{ cursor: 'pointer' }}>Typography</Typography>
      <Typography variant='h4' marginTop='20px' onClick={() => router('/button')} style={{ cursor: 'pointer' }}>Button</Typography>
      <Typography variant='h4' marginTop='20px' onClick={() => router('/text-field')} style={{ cursor: 'pointer' }}>Text Field</Typography>
      <Typography variant='h4' marginTop='20px' onClick={() => router('/select')} style={{ cursor: 'pointer' }}>Select</Typography>
    </Box>
  )
}

export default Homepage;
