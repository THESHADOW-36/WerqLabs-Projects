import React from 'react'
// import { styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { DomainVerification, KeyboardArrowLeft, KeyboardArrowRight, LocalShipping, Output, People, Search } from '@mui/icons-material'


// const DrawerHeader = styled('table-head')(({ theme }) => ({
//   [theme.breakpoints.down('md')]: {
//     padding: '14px 10px',
//     width: '16%',
//     fontWeight: '600',
//     color: '#363636',
//     letterSpacing: '-0.3px'
//   }
// }));

const sxDashboard = {
  width: '97.4%',
  margin: 'auto'
}

const miniDetailLay = {
  boxShadow: '0px 0px 4px -1.7px gray',
  borderRadius: '8px',
  height: { xs: '100px', sm: '120px', md: '92px' },
  display: 'flex',
  alignItems: 'center',
  padding: { xs: '0px 30px', md: '0px 16px' },
  margin: 'auto'
}

const mdTitle = {
  fontSize: { xs: '16px', sm: '22px', md: '16px' },
  fontWeight: '600',
  letterSpacing: '-0.5px'
}

const mdCount = {
  fontSize: { xs: '16px', sm: '22px', md: '16px' },
  fontWeight: '600',
  color: '#28a745',
  marginTop: '5px'
}

const visitTableLayout = {
  boxShadow: '0px 0px 4px -1.7px gray',
  backgroundColor: 'white',
  borderRadius: '8px',
  width: { xs: '91%', sm: '100%' },
  height: { md: '342px' },
  margin: '22px auto 0px'
}

const vtTopHeader = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center'
}

const vtTitle = {
  fontSize: { xs: '18px', sm: '22px', md: '18px' },
  fontWeight: '600',
  letterSpacing: '-0.4px',
  marginBottom: { xs: '10px', md: '0px' }
}

const vtTextField = {
  width: { xs: '200px', sm: '244px' },
  '& .MuiInputBase-root': { height: { xs: '34px', sm: '40', md: '34px' }, fontSize: { xs: '14px', sm: '18px', md: '14px' } },
}

const vtButton = {
  height: '100%',
  fontSize: { xs: '14px', sm: '18px', md: '12px' },
  textTransform: 'capitalize',
  height: { xs: '34px', sm: '40', md: '34px' },
  letterSpacing: '0.5px',
  paddingRight: '9px',
  paddingLeft: '9px',
  marginLeft: '16px'
}

const vtTable = {
  border: '1px solid rgb(224, 224, 224)',
  borderRadius: '4px',
  marginTop: '16px'
}

const vtTableHead = {
  color: '#363636',
  width: '16%',
  fontSize: { xs: '14px', sm: '18px', md: '14px' },
  fontWeight: '600',
  letterSpacing: '-0.3px',
  textWrap: 'noWrap',
  padding: { xs: '14px 10px', sm: '16px 10px', md: '14px 10px' }
}

const vtTableBody = {
  color: '#545454',
  fontSize: { xs: '14px', sm: '18px', md: '14px' },
  textWrap: 'nowrap',
  padding: { xs: '8px 0px 8px 10px', sm: '10px 0px 10px 10px', md: '5px 0px 5px 10px' }
}

const vtPagination = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const vtpPgDispalyer = {
  color: '#212529',
  fontSize: { xs: '14px', sm: '18px', md: '14px' },
  padding: '22px 16px 20px 16px'
}

const vtPNav = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '30px'
}

const vtPNavArrows = {
  backgroundColor: '#b6c3ef',
  borderRadius: '1px',
  width: { xs: '18px', sm: '22px', md: '18px' },
  height: { xs: '18px', sm: '22px', md: '18px' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '5px'
}

const vtPNum = {
  backgroundColor: '#ebebeb',
  borderRadius: '1px',
  width: { xs: '22px', sm: '26px', md: '22px' },
  height: { xs: '22px', sm: '26px', md: '22px' },
  fontSize: { xs: '14px', sm: '18px', md: '14px' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '5px'
}





const Homepage = () => {
  const dbList1 = [
    {
      title: 'Total Entries',
      count: '361',
      logo: <Box sx={{ backgroundColor: '#fff1da', borderRadius: '50px', width: { xs: '60px', sm: '75px', md: '60px' }, height: { xs: '60px', sm: '75px', md: '60px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <People sx={{ fontSize: { xs: '36px', sm: '46px', md: '36px' }, color: '#fab044' }} /></Box >
    },
    {
      title: 'Vehicles',
      count: '5',
      logo: <Box sx={{ backgroundColor: '#e4e4fe', borderRadius: '50px', width: { xs: '60px', sm: '75px', md: '60px' }, height: { xs: '60px', sm: '75px', md: '60px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LocalShipping sx={{ fontSize: { xs: '36px', sm: '46px', md: '36px' }, color: '#767af5' }} /></Box>
    },
    {
      title: 'Check In',
      count: '361',
      logo: <Box sx={{ backgroundColor: '#fdeae4', borderRadius: '50px', width: { xs: '60px', sm: '75px', md: '60px' }, height: { xs: '60px', sm: '75px', md: '60px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><DomainVerification sx={{ fontSize: { xs: '36px', sm: '46px', md: '36px' }, color: '#f09e7f' }} /></Box>
    },
    {
      title: 'Check Out',
      count: '361',
      logo: <Box sx={{ backgroundColor: '#f7e4fe', borderRadius: '50px', width: { xs: '60px', sm: '75px', md: '60px' }, height: { xs: '60px', sm: '75px', md: '60px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Output sx={{ fontSize: { xs: '36px', sm: '46px', md: '36px' }, color: '#b039db' }} /></Box>
    }
  ]

  const dbVisitors = [
    {
      name: 'Jose King',
      compName: 'Initech',
      phone: '8975894323',
      date: '20th Nov 2023',
      chkIn: '12:11 PM',
      chkOut: '12:03 PM'
    },
    {
      name: 'Kevin Wilkinson',
      compName: 'Globex Corporation',
      phone: '7856934434',
      date: '20th Nov 2023',
      chkIn: '12:11 PM',
      chkOut: '11:55 PM'
    },
    {
      name: 'John Doe',
      compName: 'werqlabs',
      phone: '9867834423',
      date: '20th Nov 2023',
      chkIn: '12:11 PM',
      chkOut: '05:18 PM'
    },
  ]
  return (
    <Box sx={sxDashboard}>
      <Grid container spacing={3} marginTop='-2px'>
        {dbList1.map((db1) => (
          <Grid item xs={11} sm={6} md={3} sx={{ margin: 'auto' }}>
            <Paper sx={miniDetailLay}>
              {db1.logo}
              <Box sx={{ marginLeft: { xs: '26px', md: '16px' } }}>
                <Typography sx={mdTitle}>{db1.title}</Typography>
                <Typography sx={mdCount}>{db1.count}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={visitTableLayout}>
        <Box sx={{ padding: '15px 15px' }}>
          <Box sx={vtTopHeader}>
            <Typography sx={vtTitle}>Recent Visits</Typography>
            <Box>
              <TextField sx={vtTextField} InputProps={{ endAdornment: (<InputAdornment><Search sx={{ fontSize: { xs: '20px', sm: '26px', md: '20px' } }} /></InputAdornment>) }} size='small' placeholder='Search...' />
              <Button variant='contained' sx={vtButton}>Check In</Button>
            </Box>
          </Box>

          <Box sx={vtTable}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={vtTableHead}>Name</TableCell>
                    <TableCell sx={vtTableHead}>Company Name</TableCell>
                    <TableCell sx={vtTableHead}>Phone</TableCell>
                    <TableCell sx={vtTableHead}>Date</TableCell>
                    <TableCell sx={vtTableHead}>Check In</TableCell>
                    <TableCell sx={vtTableHead}>Check Out</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dbVisitors.map((dbv) => (
                    <TableRow>
                      <TableCell sx={vtTableBody}><Box sx={{ display: 'flex', alignItems: 'center' }}><Avatar sx={{ width: '38px', height: '38px', marginRight: '8px' }} />{dbv.name}</Box></TableCell>
                      <TableCell sx={vtTableBody}>{dbv.compName}</TableCell>
                      <TableCell sx={vtTableBody}>{dbv.phone}</TableCell>
                      <TableCell sx={vtTableBody}>{dbv.date}</TableCell>
                      <TableCell sx={vtTableBody}>{dbv.chkIn}</TableCell>
                      <TableCell sx={vtTableBody}>{dbv.chkOut}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <TablePagination></TablePagination> */}
            <Box sx={vtPagination}>
              <Typography sx={vtpPgDispalyer}>Showing <b>1</b> to <b>3</b> out of <b>3</b> People</Typography>
              <Box sx={vtPNav}>
                <Box sx={vtPNavArrows}><KeyboardArrowLeft sx={{ color: 'white', fontSize: '18px' }} /></Box>
                <Box sx={vtPNum}>1</Box>
                <Box sx={vtPNavArrows}><KeyboardArrowRight sx={{ color: 'white', fontSize: '18px' }} /></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default Homepage












// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function PersistentDrawerLeft() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Persistent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Main>
//     </Box>
//   );
// }


// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
