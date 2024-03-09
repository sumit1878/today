import React from 'react';
import './signupform.css';
import { FaUser , FaLock } from "react-icons/fa";
import {Link} from "react-router-dom";
const Signupform =() => {
  return (
      <div className='wrapper'>
        <form action="">
          <h1>Register Here</h1>
          <div className='input-box'>
            <input type="text" placeholder='Username' required/>
            <FaUser className='icon' />
          </div>
          <div className='name-box'>
            <input type="text" placeholder='Firstname' required/>
            <input type="text" placeholder='Lastname' required/>
            
          </div>
          <div className='input-box'>
            <input type="text" placeholder='Password' required/>
            <FaLock className='icon'/>
          </div>
          <div className='input-box'>
            <input type="text" placeholder='Confirm Password' required/>
            <FaLock className='icon'/>
          </div>
          {/* <div className='remember-forgot'>
            <label><input type="checkbox"/>Remember me</label>
            <a href='#'>Forgot password?</a>
          </div> */}
          <button type='Submit'>Register</button>
          <div className='register-link'>
            <p>Already have an account?<span><Link to = "/Loginform">Login</Link></span></p>
          </div>

        </form>

      </div>
      
  );
};
export default Signupform;