import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const Homepage = () => {
  const router = useNavigate();
  return (
    <>
      <Typography variant='h4' onClick={() => router('/typography')} style={{ cursor: 'pointer' }}>Typography</Typography>
      <Typography variant='h4' marginTop='20px' onClick={() => router('/button')} style={{ cursor: 'pointer' }}>Button</Typography>
      <Typography variant='h4' marginTop='20px' onClick={() => router('/text-field')} style={{ cursor: 'pointer' }}>Text Field</Typography>
    </>
  )
}

export default Homepage;
