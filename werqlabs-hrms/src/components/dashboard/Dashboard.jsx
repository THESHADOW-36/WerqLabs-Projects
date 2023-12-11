import React from 'react'
import "./Dashboard.css"
import hrmsLogoWhite from './../../icons/hrms-logo-white.png'

const Dashboard = () => {
    return (
        <div className='dashboard-layout'>
            <div className="dashboard">
                <div className='hrms-logo-white'><img src={hrmsLogoWhite} alt="" /></div>
                <div className='db-category'>
                    <div className='db-category-content'>
                        <div className='db-category-img'><img src="" alt="asdf" /></div>
                        <p className='db-category-name'>Dashboard</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
