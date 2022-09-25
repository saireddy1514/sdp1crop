import React from 'react'
import './style.css';
import './LoginUi.css';
import profile from './Profile1m.png';
import email from './email.png';
import pass from "./pass.png";
import { Button } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
function Register() {
  return (
    <div className='aa'>
      <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Register</h1>
           <p><i>Please give your details to register into our website</i></p>
           <div className="second-input">
             <img src={email} alt="pass" className="email"/>
             <input type="input" placeholder="Email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Confirm Password" className="name"/>
           </div>
          <div className="login-button">
          <Button href="login"
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mb:1,alignProperty }}
            >
          Register
            </Button>
            <Button href="register"
              type="reset"
              halfWidth
              variant="contained"
              sx={{ mb:1,ml:6,alignProperty }}
            >
         Reset
            </Button>
          </div></div></div></div></div>
    </div>
  )
}

export default Register