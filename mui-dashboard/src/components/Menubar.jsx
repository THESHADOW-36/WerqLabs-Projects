import React from 'react'
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Diamond, DashboardOutlined, PendingActions, LocalShipping, People, CheckBoxOutlined, SettingsOutlined, HelpOutlineOutlined, LogoutOutlined } from '@mui/icons-material';


const Menubar = ({ menubarToggle, setMenubarToggle }) => {

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

   function menuNavigate() {

   }

   return (
      <>
         <Box>
            <Drawer open={menubarToggle} onClose={() => setMenubarToggle(false)} variant='persistent'>
               <Box sx={{ backgroundColor: '#212529', color: 'white', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Stack direction='row' sx={{ alignItems: 'center', padding: '20px' }}>
                     <Diamond sx={{ fontSize: '40px', marginRight: '10px' }} />
                     <Typography variant='h5' sx={{ fontWeight: '600', fontSize: '30px', letterSpacing: '-1.8px' }}>
                        Logo
                     </Typography>
                  </Stack>
                  <List sx={{ marginTop: '2px', width: '18.2vw' }}>
                     {menuList1.map((ml, index) => (
                        <ListItemButton key={index} onClick={menuNavigate(ml.name)}>
                           <ListItemIcon sx={{ color: '#9ca3af', alignItems: 'center', padding: '7px 0px', paddingLeft: '4px' }}>
                              <Box sx={{ marginRight: '16px' }}>{ml.logo}</Box>
                              <ListItemText >
                                 <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>{ml.name}</Typography>
                              </ListItemText>
                           </ListItemIcon>
                        </ListItemButton>
                     ))}
                  </List>
                  <List sx={{ marginTop: 'auto', padding: 0 }} >
                     {menuList2.map((ml, index) => (
                        <ListItemButton key={index}>
                           <ListItemIcon sx={{ color: '#9ca3af', alignItems: 'center', padding: '3px 0px', paddingLeft: '4px' }}>
                              <Box sx={{ marginRight: '16px' }}>{ml.logo}</Box>
                              <ListItemText>
                                 <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>{ml.name}</Typography>
                              </ListItemText>
                           </ListItemIcon>
                        </ListItemButton>
                     ))}
                  </List>
               </Box>
            </Drawer >
         </Box >
      </>
   )
}

export default Menubar;
