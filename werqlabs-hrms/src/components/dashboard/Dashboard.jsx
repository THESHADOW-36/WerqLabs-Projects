import React, { useContext } from 'react'
import "./Dashboard.css"
import hrmsLogoWhite from './../../icons/hrms-logo-white.png'
import hrmsSymbolLogoWhite from './../../icons/HRMS-SYMBOL-WHITE.png'
import dashboardIcon from './../../icons/dashboard-icon.png'
import peopleIcon from './../../icons/people-icon.png'
import AttendanceIcon from './../../icons/attendance-icon.png'
import workforceIcon from './../../icons/workforce-icon.png'
import performanceIcon from './../../icons/performance-icon.png'
import payrollIcon from './../../icons/payroll-icon.png'
import assetsIcon from './../../icons/assets-icon.png'
import settingsIcon from './../../icons/settings-icon.png'
import helpCenterIcon from './../../icons/help-center-icon.png'
import logoutIcon from './../../icons/logout-icon.png'
import { MyContext } from '../context/GobalContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
	const { menuToggle, menuBarToggle } = useContext(MyContext)

	const router = useNavigate();

	return (
		<div className='dashboard-navbar'>
			{menuToggle ?
				<div className='dashboard-layout'>
					<div className="dashboard">
						<div className='db-logo-close'>
							<div className='hrms-logo-white' onClick={() => router('/')}><img src={hrmsLogoWhite} alt="" /></div>
							<div className='db-close-button' onClick={menuBarToggle}><i class="fa-solid fa-xmark fa-xl"></i></div>
						</div>
						<div className='db-category'>
							<div className='db-category-top'>
								<div className='db-category-content' onClick={() => router('/')}>
									<div className='db-category-img' ><img src={dashboardIcon} alt="asdf" /></div>
									<p className='db-category-name'>Dashboard</p>
								</div>

								<div className="db-category-content" onClick={() => router('/employees-list')}>
									<div className='db-category-img'><img src={peopleIcon} alt="asdf" /></div>
									<p className='db-category-name'>People</p>
								</div>
								<div className="db-category-content">
									<div className='db-category-img'><img src={AttendanceIcon} alt="asdf" /></div>
									<p className='db-category-name'>Attendance</p>
								</div>
								<div className="db-category-content">
									<div className='db-category-img'><img src={workforceIcon} alt="asdf" /></div>
									<p className='db-category-name'>Workforce</p>
								</div>
								<div className="db-category-content">
									<div className='db-category-img'><img src={performanceIcon} alt="asdf" /></div>
									<p className='db-category-name'>Performance</p>
								</div>
								<div className="db-category-content">
									<div className='db-category-img'><img src={payrollIcon} alt="asdf" /></div>
									<p className='db-category-name'>Payroll</p>
								</div>
								<div className="db-category-content">
									<div className='db-category-img'><img src={assetsIcon} alt="asdf" /></div>
									<p className='db-category-name'>Assets</p>
								</div>
							</div>
							<div className="db-category-bottom">
								<div className="db-category-content">
									<div className='db-category-img'><img src={settingsIcon} alt="asdf" /></div>
									<p className='db-category-name'>Settings</p>
								</div>
								<div className="db-category-content">
									<div className='db-category-img'><img src={helpCenterIcon} alt="asdf" /></div>
									<p className='db-category-name'>Help center</p>
								</div>
								<div className="db-category-content">
									<div className='db-category-img'><img src={logoutIcon} alt="asdf" /></div>
									<p className='db-category-name' onClick={() => router('/login')}>Log out</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				:
				<div className='mini-dashboard-layout'>
					<div className="mini-dashboard">
						<div className='mini-hrms-logo-white' onClick={() => router('/')}><img src={hrmsSymbolLogoWhite} alt="" /></div>
						<div className='mini-db-category'>
							<div className='mini-db-category-top'>
								<div className='mini-db-category-img' onClick={() => router('/')}><img src={dashboardIcon} alt="asdf" /></div>
								<div className='mini-db-category-img' onClick={() => router('/employees-list')}><img src={peopleIcon} alt="asdf" /></div>
								<div className='mini-db-category-img'><img src={AttendanceIcon} alt="asdf" /></div>
								<div className='mini-db-category-img'><img src={workforceIcon} alt="asdf" /></div>
								<div className='mini-db-category-img'><img src={performanceIcon} alt="asdf" /></div>
								<div className='mini-db-category-img'><img src={payrollIcon} alt="asdf" /></div>
								<div className='mini-db-category-img'><img src={assetsIcon} alt="asdf" /></div>
							</div>
							<div className="mini-db-category-bottom">
								<div className='mini-db-category-img'><img src={settingsIcon} alt="asdf" /></div>
								<div className='mini-db-category-img'><img src={helpCenterIcon} alt="asdf" /></div>
								<div className='mini-db-category-img' onClick={() => router('/login')}><img src={logoutIcon} alt="asdf" /></div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}

export default Dashboard
