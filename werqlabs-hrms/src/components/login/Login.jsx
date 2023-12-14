import React from 'react'
import "./Login.css"
import hrmsLogo from './../../icons/HRMS-SYMBOL-BLACK.png'
import hideIcon from './../../icons/hide-icon.png'
import forgotIcon from './../../icons/forgot-icon.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const router = useNavigate();
	return (
		<div className='login-layout'>
			<div className='form-layout '>
				<div className='form-content'>

					<div className='form-header'>
						<h4>Welcome Back!</h4>
						<p>Sign in to continue to HRMS</p>
						<div className='hrms-logo' onClick={() => router('/')}>
							<img src={hrmsLogo} alt="" />
						</div>
					</div>

					<div className='form-body'>
						<form className='form-body-content'>
							<div>
								<label className='form-label'>Username</label>
								<div className='form-body-input input-group input-group'>
									<input type="text" className='form-control' />
								</div>

								<label className='form-label-password form-label'>Password</label>
								<div className='form-body-input input-group input-group'>
									<input type="password" className='form-control' />
									{/* <div className='input-group-text'>O</div> */}
									<button className='hide-icon btn'><img src={hideIcon} alt="" /></button>
								</div>
								<div className='form-check'>
									<input type="checkbox" id='remember' className='form-check-input' />
									<label for='remember' className='form-label-remember form-check-label'>Remember me</label>
								</div>
							</div>


							<div>
								<button className='login-button btn w-100'>Login</button>

								<div className='forgot-your-password'>
									<div className='forgot-icon'><img src={forgotIcon} alt="" /></div>
									<span>Forgot your password?</span>
								</div>

							</div>
							<div className='copyright-layout-mobile'>
								<p><span className='copyright'><i class="fa-regular fa-copyright"></i></span>2023 HRMS. Crafted with <span className='heart'><i class="fa-solid fa-heart"></i></span> by Werq Labs</p>
							</div>
						</form>
					</div>
				</div>
				<div className='copyright-layout'>
					<p><i class="fa-regular fa-copyright copyright"></i>2023 HRMS. Crafted with <span className='heart'><i class="fa-solid fa-heart"></i></span> by Werq Labs</p>
				</div>
			</div>
		</div>
	)
}

export default Login
