import React from 'react'
import "./SignIn.css"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const router = useNavigate();
  return (
    <div>
      <div className='sign-in-layout'>
        <div className='sign-in'>
          <h1 className='sign-in-text'>Sign In</h1>

          <form className='si-form'>

            <div className='si-label-input'>
              <label>Email / User Id<span className='si-colon-2'>:</span></label>
              <div className='si-colon'>:</div>
              <div className='si-input'><input type="mail" /></div>
            </div>

            <div className='si-label-input'>
              <label>Password <span className='si-colon-2'>:</span></label>
              <div className='si-colon'>:</div>
              <div className='si-input'><input type="password" /></div>
            </div>

            <div className='si-forgot-password'>
              <p>Forgot Password</p>
            </div>

            <div className='si-submit' >
              <input type="submit" value="Sign In" />
            </div>

            <h4 className='si-to-si' onClick={() => router('/sign-up')}>Registered Here</h4>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
