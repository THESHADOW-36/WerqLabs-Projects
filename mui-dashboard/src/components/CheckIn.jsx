import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Grid, InputLabel, Paper, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import { AddAPhotoOutlined, ArrowForward } from '@mui/icons-material';
// import { alpha, styled } from '@mui/material/styles';
import './Css.css'

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//    'label + &': {
//       marginTop: theme.spacing(3),
//    },
//    '& .MuiInputBase-input': {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
//       border: '1px solid',
//       borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
//       fontSize: 16,
//       width: 'auto',
//       padding: '10px 12px',
//       transition: theme.transitions.create([
//          'border-color',
//          'background-color',
//          'box-shadow',
//       ]),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//          '-apple-system',
//          'BlinkMacSystemFont',
//          '"Segoe UI"',
//          'Roboto',
//          '"Helvetica Neue"',
//          'Arial',
//          'sans-serif',
//          '"Apple Color Emoji"',
//          '"Segoe UI Emoji"',
//          '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//          borderColor: theme.palette.primary.main,
//       },
//    },
// }));


const checkIn = {
   width: '100%'
}

const ciStepper = {
   width: { xs: '100%', sm: '80%', md: '70%' },
   padding: '30px 0px 29px 0px',
   margin: 'auto'
}

const ciStepperText = {
   fontSize: { xs: '14px', sm: '18px', md: '14px' },
}

const visitorCheckIn = {
   width: { xs: '92%', sm: '86%' },
   margin: 'auto'
}

const vciDetails = {
   boxShadow: '0px 0px 4px -1.7px gray',
   borderRadius: '10px',
   display: { xs: 'block', md: 'flex' },
   justifyContent: 'space-between',
   padding: '15px'
}

const vciCameraLayout = {
   width: { xs: '100%', md: '29.4%' },
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center'
}

const vciCameraImgLayout = {
   backgroundColor: '#dddddd',
   borderRadius: '8px',
   width: { xs: '98%', md: '100%' },
   height: { xs: '300px', md: '257px' },
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
}

const vciCameraImg = {
   color: '#cccccc',
   fontSize: { xs: '80px', md: '66px' }
}
const vciCameraText = {
   color: '#cccccc',
   fontSize: { xs: '14px', md: '10px' },
   marginTop: '4px'
}

const vciCameraButton = {
   width: { xs: '130px', md: '102px' },
   fontSize: { xs: '15px', sm: '16px', md: '13px' },
   textWrap: 'noWrap',
   textTransform: 'capitalize',
   marginTop: '15px'
}

const vciDetailsLayout = {
   width: { xs: '100%', md: '67.3%' },
   marginTop: { xs: '30px', md: '0' }
}

const vciGridItems = {
   marginBottom: { xs: '10px', sm: '14px', md: '10px' }
}

const vciFormLabel = {
   color: '#4d4d4d',
   fontSize: { xs: '16px', sm: '18px', md: '14px' },
   fontWeight: '600',
   letterSpacing: '-0.4px',
   marginBottom: '6px'
}

const vciTextField = {
   width: '100%',
   fontSize: { xs: '14px', sm: '12px' }
}

const vciNavButtonGrp = {
   display: 'flex',
   justifyContent: 'space-between',
   marginTop: '30px'
}

const vciNavButton = {
   textTransform: 'capitalize',
   fontSize: { xs: '16px', md: '13px' },
   padding: { xs: '6px 16px', md: '6px 11px' }
}








const CheckIn = () => {
   const [stepNav, setStepNav] = useState(0);
   const [navBackDisabled, setNavBackDisabled] = useState(true);
   const [isSubmitButtonVisible, setIsSubmitButtonVisible] = useState(false);

   // console.log(stepNav)
   // console.log(navBackDisabled)



   function stepNavBack() {
      const isCurrentIndex = stepNav - 1;
      if (isCurrentIndex == 0) {
         setNavBackDisabled(true);
      }
      console.log('stepNav : ', stepNav);
      setStepNav(isCurrentIndex)
      setIsSubmitButtonVisible(false);

      // console.log('stepNav : ', stepNav);
      // if (stepNav == 1) {
      //    setNavBackDisabled(true);
      // }

      // setStepNav((less) => less - 1)
      // setIsSubmitButtonVisible(false);
   }

   function stepNavNext() {
      const isCurrentIndex = stepNav + 1;
      if (isCurrentIndex == 2) {
         setIsSubmitButtonVisible(true);
      }
      setStepNav(isCurrentIndex)
      setNavBackDisabled(false);

      // if (stepNav == 1) {
      //    setIsSubmitButtonVisible(true);
      // }

      // setStepNav((add) => add + 1)
      // setNavBackDisabled(false);
   }


   return (
      <Box sx={checkIn}>
         <Box sx={ciStepper}>
            <Stepper activeStep={stepNav} alternativeLabel={false} sx={{ marginLeft: { xs: '16px', sm: '0', md: '0' } }}>
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
               <Box sx={vciDetailsLayout}>
                  {/* <FormControl variant="standard">
                     <InputLabel shrink htmlFor="bootstrap-input">
                        Bootstrap
                     </InputLabel>
                     <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
                  </FormControl> */}
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={4} sx={vciGridItems}>
                        <InputLabel sx={vciFormLabel} required>First Name</InputLabel>
                        <TextField sx={vciTextField} InputProps={{ sx: { height: { xs: '34px', sm: '40px', md: '34px' }, fontSize: { xs: '15px', sm: '16px', md: '14px' } } }} placeholder='First Name' />
                     </Grid>
                     <Grid item xs={12} sm={4} sx={vciGridItems}>
                        <InputLabel sx={vciFormLabel}>Middle Name</InputLabel>
                        <TextField sx={vciTextField} InputProps={{ sx: { height: { xs: '34px', sm: '40px', md: '34px' }, fontSize: { xs: '15px', sm: '16px', md: '14px' } } }} placeholder='Middle Name' />
                     </Grid>
                     <Grid item xs={12} sm={4} sx={vciGridItems}>
                        <InputLabel sx={vciFormLabel} required>Last Name</InputLabel>
                        <TextField sx={vciTextField} InputProps={{ sx: { height: { xs: '34px', sm: '40px', md: '34px' }, fontSize: { xs: '15px', sm: '16px', md: '14px' } } }} placeholder='Last Name' />
                     </Grid>
                     <Grid item xs={12} sm={6} sx={vciGridItems}>
                        <InputLabel sx={vciFormLabel} required>Phone</InputLabel>
                        <TextField sx={vciTextField} InputProps={{ sx: { height: { xs: '34px', sm: '40px', md: '34px' }, fontSize: { xs: '15px', sm: '16px', md: '14px' } } }} placeholder='Phone' />
                     </Grid>
                     <Grid item xs={12} sm={6} sx={vciGridItems}>
                        <InputLabel sx={vciFormLabel} required>Email</InputLabel>
                        <TextField sx={vciTextField} InputProps={{ sx: { height: { xs: '34px', sm: '40px', md: '34px' }, fontSize: { xs: '15px', sm: '16px', md: '14px' } } }} placeholder='Email' />
                     </Grid>
                     <Grid item xs={12} sm={6} sx={vciGridItems}>
                        <InputLabel sx={vciFormLabel} required>Company</InputLabel>
                        <TextField sx={vciTextField} InputProps={{ sx: { height: { xs: '34px', sm: '40px', md: '34px' }, fontSize: { xs: '15px', sm: '16px', md: '14px' } } }} placeholder='Company' />
                     </Grid>
                     <Grid item xs={12} sm={6} sx={vciGridItems}>
                        <InputLabel sx={vciFormLabel} required>Contact Person</InputLabel>
                        <TextField sx={vciTextField} InputProps={{ sx: { height: { xs: '34px', sm: '40px', md: '34px' }, fontSize: { xs: '15px', sm: '16px', md: '14px' } } }} placeholder='Contact Person' />
                     </Grid>
                  </Grid>
               </Box>
            </Paper>
            <Box sx={vciNavButtonGrp}>
               <Button sx={vciNavButton} onClick={() => stepNavBack()} disabled={navBackDisabled}>Back</Button>
               {isSubmitButtonVisible ?
                  <Button sx={vciNavButton} variant="contained" endIcon={<ArrowForward sx={{ width: '16px', height: '16px', marginLeft: '-4px' }} />}>Submit</Button> : <Button sx={vciNavButton} onClick={() => stepNavNext()} variant="contained" endIcon={<ArrowForward sx={{ width: '16px', height: '16px', marginLeft: '-4px' }} />}>Next</Button>}
            </Box>
         </Box>
      </Box>
   )
}

export default CheckIn
