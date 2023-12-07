import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const router =  useNavigate();
  return (
    <div>
        <button onClick={()=>router('/sign-up')}>Login</button>
    </div>
  )
}

export default Homepage
