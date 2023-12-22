import React, { useState } from 'react'
import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
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
				{menubarToggle &&
					<Box sx={{ border: '1px solid black', minWidth: '18%' }}>
						<Menubar menubarToggle={menubarToggle} setMenubarToggle={setMenubarToggle} />
					</Box>
				}
				<Box sx={{ width: '100%', marginLeft: 'auto' }}>
					<AppBar sx={{ backgroundColor: 'white', position: 'relative', width: '100%' }}>
						<Toolbar sx={{ padding: '2px' }}>
							<IconButton onClick={menuToggle} sx={{ marginLeft: '-16px' }}>
								<Menu sx={{ color: '#67707b', fontSize: '30px' }} />
							</IconButton>
							<NotificationsNoneOutlined sx={{ color: '#67707b', fontSize: '24px', marginLeft: 'auto' }} />
							<Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZAB-0VT25DjweShNPo2i1BKWTl9c29wxCA&usqp=CAU' sx={{ marginLeft: '22px' }} onClick={menuToggle} />
							<Stack sx={{ color: 'black', textAlign: 'left', paddingTop: '10px', marginLeft: '8px' }}>
								<Typography sx={{ fontWeight: '600', letterSpacing: '-0.5px', lineHeight: '18px' }}>Vishnu Nair</Typography>
								<Typography sx={{ fontSize: '12px', color: '#5b5b5b' }}>User</Typography>
							</Stack>
						</Toolbar>
					</AppBar>


					<Box maxWidth sx={{ backgroundColor: '#f5f5f6', width: '100%', height: '88.5vh' }}>
						<App />
					</Box>
				</Box>
			</Box >
		</>
	)
}

export default Navbar
