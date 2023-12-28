import React from 'react'
import { AppBar, Avatar, Badge, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { Menu, NotificationsNoneOutlined } from '@mui/icons-material';

const navbar = {
	backgroundColor: 'white',
	position: 'relative',
	width: '100%',
	boxShadow: '0px 0px 4px -1.7px gray',
	zIndex: '5'
}

const toolbar = {
	padding: { xs: '2px', sm: '4px', md: '2px' },
	width: { xs: '90%', md: '95%' },
	margin: 'auto'
}

const iconButton = {
	marginLeft: '-16px'
}

const navMenu = {
	color: '#67707b',
	fontSize: { xs: '30px', sm: '40px', md: '30px' }
}

const badge = {
	color: '#67707b',
	marginLeft: 'auto'
}

const navNotification = {
	fontSize: { xs: '24px', sm: '32px', md: '24px' }
}

const navAvatar = {
	marginLeft: '22px',
	width: { xs: '40px', sm: '48px', md: '40px' },
	height: { xs: '40px', sm: '48px', md: '40px' }
}

const navProfileLayout = {
	color: 'black',
	textAlign: 'left',
	paddingTop: '10px',
	marginLeft: '8px'
}

const navProfileName = {
	fontSize: { xs: '16px', sm: '20px', md: '16px' },
	fontWeight: '600',
	letterSpacing: '-0.5px',
	lineHeight: '18px'
}

const navProfileType = {
	fontSize: { xs: '12px', sm: '16px', md: '12px' },
	color: '#5b5b5b'
}



const Navbar = ({ menuToggle }) => {
	return (
		<AppBar sx={navbar}>
			<Toolbar sx={toolbar}>
				<IconButton onClick={menuToggle} sx={iconButton}>
					<Menu sx={navMenu} />
				</IconButton>
				<Badge badgeContent={3} color='primary' sx={badge}>
					<NotificationsNoneOutlined sx={navNotification} />
				</Badge>
				<Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZAB-0VT25DjweShNPo2i1BKWTl9c29wxCA&usqp=CAU' sx={navAvatar} onClick={menuToggle} />
				<Stack sx={navProfileLayout}>
					<Typography sx={navProfileName}>Vishnu Nair</Typography>
					<Typography sx={navProfileType}>User</Typography>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
