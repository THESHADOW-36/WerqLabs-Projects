import React from 'react'
import "./SignUp.css"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const router = useNavigate();
  return (
    <div className='sign-up-layout'>
      <div className='sign-up'>
        <h1 className='sign-up-text'>Sign Up</h1>

        <form className='su-form'>
          <div className='su-label-input'>
            <label>First Name <span className='su-colon-2'>:</span></label>
            <div className='su-colon'>:</div>
            <div className='su-input'><input type="name" /></div>
          </div>

          <div className='su-label-input'>
            <label>Middle Name <span className='su-colon-2'>:</span></label>
            <div className='su-colon'>:</div>
            <div className='su-input'><input type="name" /></div>
          </div>

          <div className='su-label-input'>
            <label>Last Name <span className='su-colon-2'>:</span></label>
            <div className='su-colon'>:</div>
            <div className='su-input'><input type="name" /></div>
          </div>

          <div className='su-label-input'>
            <label>Phone Number <span className='su-colon-2'>:</span></label>
            <div className='su-colon'>:</div>
            <div className='su-number'>
              <select className='su-number-code'>
                <option value="India">+91 (India)</option>
                <option value="Australia">+61 (Australia)</option>
                <option value="Belgium">+32 (Belgium)</option>
                <option value="Bhutan">+975 (Bhutan)</option>
                <option value="Egypt">+20 (Egypt)</option>
                <option value="France">+33 (France)</option>
                <option value="Gremany">+49 (Gremany)</option>
                <option value="Japan">+81 (Japan)</option>
              </select>
             <input className='su-number-input' type="number" maxLength="10"/>
            </div>
          </div>

          <div className='su-label-input'>
            <label>User ID <span className='su-colon-2'>:</span></label>
            <div className='su-colon'>:</div>
            <div className='su-input'><input type="text" /></div>
          </div>

          <div className='su-label-input'>
            <label>Email <span className='su-colon-2'>:</span></label>
            <div className='su-colon'>:</div>
            <div className='su-input'><input type="mail" /></div>
          </div>

          <div className='su-label-input'>
            <label>Password <span className='su-colon-2'>:</span></label>
            <div className='su-colon'>:</div>
            <div className='su-input'><input type="password" /></div>
          </div>

          <div className='su-label-input'>
            <label>Confirm Password <span className='su-colon-2'>:</span></label>
            <div className='su-colon'>:</div>
            <div className='su-input'><input type="password" /></div>
          </div>

          <div className='su-submit' >
            <input type="submit" value="Register" />
          </div>

          <h4 className='su-to-si' onClick={()=>router('/sign-in')}>Already registered? Click here to Sign In</h4>
        </form>
      </div>
    </div>
  )
}

export default SignUp
