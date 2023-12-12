import React from 'react'
import "./EmployeesList.css"
import Dashboard from '../dashboard/Dashboard'
import Navbar from '../navbar/Navbar'

const EmployeesList = () => {
  return (
    <>
      <div className='employeesList-layout'>
        <Dashboard />
        <div className='employeesList'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default EmployeesList
