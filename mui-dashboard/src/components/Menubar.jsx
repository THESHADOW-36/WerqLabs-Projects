import React from 'react'
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Diamond, DashboardOutlined, PendingActions, LocalShipping, People, CheckBoxOutlined, SettingsOutlined, HelpOutlineOutlined, LogoutOutlined, Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const menuBarLayout = {
   backgroundColor: '#212529',
   color: 'white',
   width: '100%',
   height: '100%',
   display: 'flex',
   flexDirection: 'column'
}

const mbLogoLayout = {
   justifyContent: { xs: 'space-between', md: 'flex-start' },
   alignItems: 'center',
   padding: '20px'
}

const mbLogo = {
   fontSize: '40px',
   marginRight: '10px'
}

const mbText = {
   fontWeight: '600',
   fontSize: '30px',
   letterSpacing: '-1.8px',
   // marginLeft: '-30px'
}

const mbClose = {
   color: 'white',
   display: { xs: 'block', md: 'none' },
   marginLeft: '20px',
   cursor: 'pointer'
}

const mbList1 = {
   width: { xs: '100vw', md: '235px' },
   marginTop: '2px'
}

const mbList1Icon = {
   color: '#9ca3af',
   alignItems: 'center',
   padding: '7px 0px 7px 4px'
}

const mbList2Icon = {
   color: '#9ca3af',
   alignItems: 'center',
   padding: '3px 0px 3px 4px'
}

const mbListLogo = {
   marginRight: '16px'
}

const mbListName = {
   fontSize: '14px',
   fontWeight: '500'
}


const miniMbLogoLayout = {
   justifyContent: 'center',
   alignItems: 'center',
   padding: '20px 0px'
}

const miniMbLogo = {
   fontSize: '40px'
}

const miniMbList1 = {
   marginTop: '2px'
}

const miniMbList1Icon = {
   color: '#9ca3af',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '16px 16px'
}


const miniMbList2Icon = {
   color: '#9ca3af',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '14px 16px'
}

const miniMbListLogo = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
}








const Menubar = ({ menubarToggle, setMenubarToggle, menuToggle }) => {

   const router = useNavigate();

   function menuNavigate(list) {
      if (list.name === 'Dashboard') {
         router('/')
      } else if (list.name === 'Check In') {
         router('/check-in')
      }
   }

   const menuList1 = [
      {
         name: 'Dashboard',
         logo: <DashboardOutlined sx={{ fontSize: '26px' }} />
      },
      {
         name: 'Requests',
         logo: <PendingActions sx={{ fontSize: '26px' }} />
      },
      {
         name: 'Vehicles',
         logo: <LocalShipping sx={{ fontSize: '26px' }} />
      },
      {
         name: 'Visitors',
         logo: <People sx={{ fontSize: '26px' }} />
      },
      {
         name: 'Check In',
         logo: <CheckBoxOutlined sx={{ fontSize: '26px' }} />
      }
   ];
   const menuList2 = [
      {
         name: 'Settings',
         logo: <SettingsOutlined sx={{ fontSize: '26px' }} />
      },
      {
         name: 'Help & Support',
         logo: <HelpOutlineOutlined sx={{ fontSize: '26px' }} />
      },
      {
         name: 'Logout',
         logo: <LogoutOutlined sx={{ fontSize: '26px' }} />
      }
   ];


   return (
      <>
         <Box>
            <Drawer open={menubarToggle} onClose={() => setMenubarToggle(false)} variant='permanent'>
               {menubarToggle ?
                  <Box sx={menuBarLayout}>
                     <Stack direction='row' sx={mbLogoLayout}>
                        <Diamond sx={mbLogo} />
                        <Typography variant='h5' sx={mbText}>
                           Logo
                        </Typography>
                        <IconButton sx={mbClose}>
                           <Close onClick={menuToggle} />
                        </IconButton>
                     </Stack>
                     <List sx={mbList1}>
                        {menuList1.map((ml, index) => (
                           <ListItemButton key={index} onClick={() => menuNavigate(ml)}>
                              <ListItemIcon sx={mbList1Icon}>
                                 <Box sx={mbListLogo}>{ml.logo}</Box>
                                 <ListItemText >
                                    <Typography sx={mbListName}>{ml.name}</Typography>
                                 </ListItemText>
                              </ListItemIcon>
                           </ListItemButton>
                        ))}
                     </List>
                     <List sx={{ marginTop: 'auto', padding: 0 }} >
                        {menuList2.map((ml, index) => (
                           <ListItemButton key={index}>
                              <ListItemIcon sx={mbList2Icon}>
                                 <Box sx={mbListLogo}>{ml.logo}</Box>
                                 <ListItemText>
                                    <Typography sx={mbListName}>{ml.name}</Typography>
                                 </ListItemText>
                              </ListItemIcon>
                           </ListItemButton>
                        ))}
                     </List>
                  </Box>
                  :
                  <Box sx={menuBarLayout}>
                     <Stack direction='row' sx={miniMbLogoLayout}>
                        <Diamond sx={miniMbLogo} />
                     </Stack>
                     <List sx={miniMbList1}>
                        {menuList1.map((ml, index) => (
                           <ListItemButton key={index} onClick={() => menuNavigate(ml)} sx={miniMbList1Icon}>
                              {/* <ListItemIcon > */}
                              <Box sx={miniMbListLogo}>{ml.logo}</Box>
                              {/* </ListItemIcon> */}
                           </ListItemButton>
                        ))}
                     </List>
                     <List sx={{ marginTop: 'auto', padding: 0 }} >
                        {menuList2.map((ml, index) => (
                           <ListItemButton key={index} sx={miniMbList2Icon}>
                              {/* <ListItemIcon> */}
                              <Box sx={miniMbListLogo}>{ml.logo}</Box>
                              {/* </ListItemIcon> */}
                           </ListItemButton>
                        ))}
                     </List>
                  </Box>
               }
            </Drawer >
         </Box >
      </>
   )
}

export default Menubar;
