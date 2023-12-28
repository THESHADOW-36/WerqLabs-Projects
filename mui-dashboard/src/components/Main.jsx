import React, { useState } from 'react'
import { Box } from '@mui/material'
import Menubar from './Menubar';
import App from '../App';
import Navbar from './Navbar';


const Main = () => {
   const [menubarToggle, setMenubarToggle] = useState(true);
   function menuToggle() {
      setMenubarToggle(!menubarToggle)
   }
   return (
      <>
         <Box sx={{ display: 'flex' }}>
            {menubarToggle ?
               <Box sx={{ border: '1px solid red', minWidth: { xs: '100%', md: '234px' }, position: { xs: 'fixed', md: 'static' }, zIndex: '10' }}>
                  <Menubar menubarToggle={menubarToggle} setMenubarToggle={setMenubarToggle} menuToggle={menuToggle} />
               </Box>
               :
               <Box sx={{ border: '1px solid red', minWidth: '57px', display: { xs: 'none', md: 'block' } }}>
                  <Menubar menubarToggle={menubarToggle} setMenubarToggle={setMenubarToggle} menuToggle={menuToggle} />
               </Box>
            }
            <Box sx={{ width: '100%', marginLeft: 'auto' }}>
               <Navbar menuToggle={menuToggle} />

               <Box maxWidth sx={{ backgroundColor: '#f3f3f4', width: '100%', height: { sm: '91.5vh', md: '88.5vh' }, paddingBottom: { xs: '20px', md: '0px' } }}>
                  <App />
               </Box>
            </Box>
         </Box >
      </>
   )
}

export default Main
