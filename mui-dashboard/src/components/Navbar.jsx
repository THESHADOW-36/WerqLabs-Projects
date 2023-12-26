import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { Menu, NotificationsNoneOutlined } from '@mui/icons-material';
import Menubar from './Menubar';
import App from '../App';


const Navbar = () => {
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
					<AppBar sx={{ backgroundColor: 'white', position: 'relative', width: '100%', boxShadow: '0px 0px 4px -1.7px gray', zIndex: '5' }}>
						<Toolbar sx={{ padding: '2px', width: { xs: '90%', md: '95%' }, margin: 'auto' }}>
							<IconButton onClick={menuToggle} sx={{ marginLeft: '-16px' }}>
								<Menu sx={{ color: '#67707b', fontSize: '30px' }} />
							</IconButton>
							<Badge badgeContent={3} color='primary' sx={{ color: '#67707b', fontSize: '24px', marginLeft: 'auto' }}>
								<NotificationsNoneOutlined />
							</Badge>
							<Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZAB-0VT25DjweShNPo2i1BKWTl9c29wxCA&usqp=CAU' sx={{ marginLeft: '22px' }} onClick={menuToggle} />
							<Stack sx={{ color: 'black', textAlign: 'left', paddingTop: '10px', marginLeft: '8px' }}>
								<Typography sx={{ fontWeight: '600', letterSpacing: '-0.5px', lineHeight: '18px' }}>Vishnu Nair</Typography>
								<Typography sx={{ fontSize: '12px', color: '#5b5b5b' }}>User</Typography>
							</Stack>
						</Toolbar>
					</AppBar>


					<Box maxWidth sx={{ backgroundColor: '#f3f3f4', width: '100%', height: { md: '88.5vh' }, paddingBottom: { xs: '20px', md: '0px' } }}>
						<App />
					</Box>
				</Box>
			</Box >
		</>
	)
}

export default Navbar
