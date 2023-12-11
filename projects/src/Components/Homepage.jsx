import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const router = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => router('/sign-up')}>Login</button>
      </div>
      <div className='container' style={{ border: "1px solid red" }}>
        Hello
      </div>
    </>
  )
}

export default Homepage
