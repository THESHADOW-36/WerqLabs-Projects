import React, { useContext, useState } from 'react'
import "./EmployeesList.css"
import Dashboard from '../dashboard/Dashboard'
import Navbar from '../navbar/Navbar'
import { SearchBarLogo, ArrowRight, ArrowLeft } from '../../icons/icons'
import ExportIcon from './../../icons/export-icon.png'
import ImportIcon from './../../icons/import-icon.png'
import EditEmployeeIcon from './../../icons/edit-employee-icon.png'
import { MyContext } from '../context/GobalContext'

const EmployeesList = () => {
	// eslint-disable-next-line
	const [employeesData, setEmployeesData] = useState([
		{
			srNum: "1",
			employeeID: "#ZC29375",
			name: "John Doe",
			manager: "Teri Dactyl",
			department: "Sales",
			designation: "Sales Lead",
			status: "Full-time",
			activity: "Working"
		},
		{
			srNum: "2",
			employeeID: "#ZC29375",
			name: "Maureen Biologist",
			manager: "Bess Twishes",
			department: "UI/UX Design",
			designation: "UX Engineer",
			status: "Full-time",
			activity: "Working"
		},
		{
			srNum: "3",
			employeeID: "#ZC29375",
			name: "Isabelle Ringing",
			manager: "Rhoda Report",
			department: "Technology",
			designation: "SDE",
			status: "Part-time",
			activity: "Working"
		},
		{
			srNum: "4",
			employeeID: "#ZC29375",
			name: "John Doe",
			manager: "Teri Dactyl",
			department: "Sales",
			designation: "Sales Lead",
			status: "Full-time",
			activity: "Working"
		},
		{
			srNum: "5",
			employeeID: "#ZC29375",
			name: "Maureen Biologist",
			manager: "Bess Twishes",
			department: "UI/UX Design",
			designation: "UX Engineer",
			status: "Full-time",
			activity: "Working"
		},
		{
			srNum: "6",
			employeeID: "#ZC29375",
			name: "Isabelle Ringing",
			manager: "Rhoda Report",
			department: "Technology",
			designation: "SDE",
			status: "Part-time",
			activity: "Working"
		},
		{
			srNum: "7",
			employeeID: "#ZC29375",
			name: "Isabelle Ringing",
			manager: "Rhoda Report",
			department: "Technology",
			designation: "SDE",
			status: "Part-time",
			activity: "Working"
		},
		{
			srNum: "8",
			employeeID: "#ZC29375",
			name: "John Doe",
			manager: "Teri Dactyl",
			department: "Sales",
			designation: "Sales Lead",
			status: "Full-time",
			activity: "Working"
		},
		{
			srNum: "9",
			employeeID: "#ZC29375",
			name: "Maureen Biologist",
			manager: "Bess Twishes",
			department: "UI/UX Design",
			designation: "UX Engineer",
			status: "Full-time",
			activity: "Working"
		},
		{
			srNum: "10",
			employeeID: "#ZC29375",
			name: "Isabelle Ringing",
			manager: "Rhoda Report",
			department: "Technology",
			designation: "SDE",
			status: "Part-time",
			activity: "Working"
		},
		{
			srNum: "8",
			employeeID: "#ZC29375",
			name: "John Doe",
			manager: "Teri Dactyl",
			department: "Sales",
			designation: "Sales Lead",
			status: "Full-time",
			activity: "Working"
		},
		{
			srNum: "9",
			employeeID: "#ZC29375",
			name: "Maureen Biologist",
			manager: "Bess Twishes",
			department: "UI/UX Design",
			designation: "UX Engineer",
			status: "Full-time",
			activity: "Working"
		},
		{
			srNum: "10",
			employeeID: "#ZC29375",
			name: "Isabelle Ringing",
			manager: "Rhoda Report",
			department: "Technology",
			designation: "SDE",
			status: "Part-time",
			activity: "Working"
		},
		{
			srNum: "11",
			employeeID: "#ZC29375",
			name: "John Doe",
			manager: "Teri Dactyl",
			department: "Sales",
			designation: "Sales Lead",
			status: "Full-time",
			activity: "Working"
		},
		{
			srNum: "12",
			employeeID: "#ZC29375",
			name: "Maureen Biologist",
			manager: "Bess Twishes",
			department: "UI/UX Design",
			designation: "UX Engineer",
			status: "Full-time",
			activity: "Working"
		},
	])

	const { menuToggle, setMenuToggle, menuBarToggle } = useContext(MyContext)


	return (
		<>
			<div className='employeesList-layout'>
				<Dashboard />
				<div className='employeesList'>
					<Navbar />
					<div className='employeesList-content'>
						<div className='employeesList-header'>
							<p>Employees</p>
							<div className='el-search-bar-layout'>
								<div className='el-search-bar-content'>
									<div className='el-search-bar-input'><input type="text" placeholder='Search...' /></div>
									<div className='el-search-bar-logo'><SearchBarLogo /></div>
								</div>
								<div className='el-export-import-add'>
									<div className='el-export-icon'><img src={ExportIcon} alt="" /></div>

									<div className='el-import-icon'><img src={ImportIcon} alt="" /></div>

									<button className='el-add-employee-button'>Add Employee</button>
									<button className='el-add-employee-button-phone'>+</button>
								</div>
							</div>
						</div>

						<div className='el-data table-responsive'>
							<table className='table table-hover'>
								<thead>
									<tr>
										<th className='col'>Sr. No.</th>
										<th className='col'>Employee ID</th>
										<th className='col-2'>Name</th>
										<th className='col-2'>Manager</th>
										<th className='col'>Department</th>
										<th className='col'>Designation</th>
										<th className='col'>Status</th>
										<th className='col'>Activity</th>
										<th className='col'></th>
									</tr>
								</thead>

								{employeesData.map((ed) => (
									<tbody>
										<tr>
											<td>{ed.srNum}</td>
											<td>{ed.employeeID}</td>
											<td>{ed.name}</td>
											<td>{ed.manager}</td>
											<td>{ed.department}</td>
											<td>{ed.designation}</td>
											<td>{ed.status}</td>
											<td><span className='activity-button'>{ed.activity}</span></td>
											<td className='el-edit-employee-icon'><img src={EditEmployeeIcon} alt="" /></td>
										</tr>
									</tbody>
								))}
							</table>
						</div>

						<div className='el-pagination'>
							<p className='el-pagination-count'>showing <span>1</span> to <span>12</span> out of <span>267</span> Employees</p>

							<div className='el-pagination-nav'>
								<div className='el-pn-left-arrow'><ArrowLeft /></div>
								<div className='el-pn-num pn-selected-num'>1</div>
								<div className='el-pn-num'>2</div>
								<div className='el-pn-num'>3</div>
								<div className='el-pn-num'>4</div>
								<div className='el-pn-right-arrow'><ArrowRight /></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default EmployeesList
