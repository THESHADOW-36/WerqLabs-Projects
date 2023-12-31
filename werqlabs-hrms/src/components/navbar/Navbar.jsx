import React, { useContext } from 'react'
import "./Navbar.css"
import { NotificationLogo, SearchBarLogo } from '../../icons/icons'
import { MyContext } from '../context/GobalContext'

const Navbar = () => {
    const {menuBarToggle} = useContext(MyContext)

    return (
        <div className="navbar-layout">
            <div className='navbar-content'>
                <div className='nb-menu' onClick={menuBarToggle}><i class="fa-solid fa-bars fa-lg"></i></div>
                <div className='nb-search-bar-layout'>
                    <div className='nb-search-bar-content'>
                        <div className='nb-search-bar-logo'><SearchBarLogo /></div>
                        <div className='nb-search-bar-input'><input type="text" placeholder='Search...' /></div>
                    </div>
                    <div className='nb-notification-logo'>
                        <NotificationLogo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
