import React, { useState } from 'react'
import { Box, Button, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { AddAPhotoOutlined } from '@mui/icons-material';

const checkIn = {
   width: '100%'
}

const ciStepper = {
   width: '70%',
   padding: '30px 0px 29px',
   margin: 'auto'
}

const ciStepperText = {
   fontSize: '14px'
}

const visitorCheckIn = {
   width: '86%',
   margin: 'auto'
}

const vciDetails = {
   boxShadow: '0px 0px 4px -1.7px gray',
   borderRadius: '10px',
   display: 'flex',
   justifyContent: 'space-between',
   padding: '15px'
}

const vciCameraLayout = {
   backgroundColor: 'skyBlue',
   width: '29.4%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center'
}

const vciCameraImgLayout = {
   backgroundColor: '#dddddd',
   borderRadius: '8px',
   width: '257px',
   height: '257px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
}

const vciCameraImg = {
   color: '#cccccc',
   fontSize: '66px'
}
const vciCameraText = {
   color: '#cccccc',
   fontSize: '10px',
   marginTop: '4px'
}

const vciCameraButton = {
   width: '102px',
   fontSize: '13px',
   textWrap: 'noWrap',
   textTransform: 'capitalize',
   marginTop: '15px'
}

const vciDetailsLayout = {
   backgroundColor: 'yellow',
   width: '67.3%',
}









const CheckIn = () => {
   const [stepNav, setStepNav] = useState(0);
   return (
      <Box sx={checkIn}>
         <Box sx={ciStepper}>
            <Stepper activeStep={stepNav}>
               <Step>
                  <StepLabel><Typography sx={ciStepperText}>Visitor CheckIn</Typography></StepLabel>
               </Step>
               <Step>
                  <StepLabel><Typography sx={ciStepperText}>Vehicle CheckIn</Typography></StepLabel>
               </Step>
               <Step>
                  <StepLabel><Typography sx={ciStepperText}>Visitor Details</Typography></StepLabel>
               </Step>
            </Stepper>
         </Box>

         <Box sx={visitorCheckIn}>
            <Paper sx={vciDetails}>
               <Box sx={vciCameraLayout}>
                  <Box sx={vciCameraImgLayout}>
                     <AddAPhotoOutlined sx={vciCameraImg} />
                     <Typography sx={vciCameraText} >Take photo</Typography>
                  </Box>
                  <Button variant='contained' sx={vciCameraButton}>Open Camera</Button>
               </Box>
               <Box sx={vciDetailsLayout}>Details</Box>
            </Paper>
            <Box>
               <Button>Back</Button>
               <Button>Next</Button>
            </Box>
         </Box>
      </Box>
   )
}

export default CheckIn
