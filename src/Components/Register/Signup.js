import React from 'react'
import { useState } from 'react';
import { Button, TextField } from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import profile from '../../images/Profile.jpg'
import './SignupUi.css'
export default function Signup() {
  const navigate=useNavigate(false)

   var [name,setFullName]= useState(null);
  var [mail,setEmail]=useState(null);
  var [pwd,setPassword]=useState(null);

  function signupdata(){
    const registerdata={
      fullname:name,
      email:mail,
      password:pwd
    }
    console.log(registerdata);
    axios.post("http://localhost:2000/api/register",registerdata)
    .then(response=> {
      navigate('/login')
    })
    .catch(e=>console.log(e))

  }
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
            <img src={profile} alt="profilepic" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Register</h1>
           <div className="second-input">
 <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Full Name"
            value={name}
            onChange={(e)=>{setFullName(e.target.value)}}
          />
	
</div>
           <div className="second-input">
             <EmailIcon/>
 <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Email"
            value={mail}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
           </div>
           <div className="second-input">
            <LockIcon/>
 <TextField
            fullWidth
            type="password"
            style={{ width: "300px" }}
            label="Password"
            value={pwd}
            onChange={(e)=>{setPassword(e.target.value)}}
          />

           </div>
          <div className="login-button">
         <Button
          variant="contained"
          style={{ marginTop: "40px" }}
          fullWidth
          color="secondary"
          onClick={signupdata}
        >
          SignUp
        </Button>
          </div>
            <Button variant='text'>Forgot Password</Button>
            <Button variant="text" onClick={()=>{ navigate(`/login`)}} sx={{mb:2}}>Already have an Account?Login Here</Button>
         </div>
       </div>
     </div>
    </div>

  )
}
