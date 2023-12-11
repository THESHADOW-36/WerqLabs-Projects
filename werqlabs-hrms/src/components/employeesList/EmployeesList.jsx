import React from 'react'
import "./EmployeesList.css"
import Dashboard from '../dashboard/Dashboard'

const EmployeesList = () => {
  return (
    <div className='employeesList-layout'>
      <Dashboard />
      <div className='employeesList'>EmployeesLish</div>
    </div>
  )
}

export default EmployeesList
