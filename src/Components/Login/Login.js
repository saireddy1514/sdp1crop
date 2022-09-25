import './LoginUi.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import profile from '../../images/Profile.jpg'
import { Button,TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Login() {
  var [errmsg,seterrmsg]=useState(null);
  const navigate=useNavigate(false)
  var [mail,setEmail]=useState(null);
  var [pwd,setPassword]=useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['dummycookie']);
  function signindata(){
    const logindata={
      email:mail,
      password:pwd
    }
    axios.post("http://localhost:2000/api/login",logindata)
    .then(response=> {
      console.log(response)
      if(response.status=200){
        setCookie('token', response.data.token, { path: '/' });
        if(response.data.role=="Farmer"){
        navigate('/shopping')  
        }
        else if(response.data.role=="Admin"){
          navigate('/sellers')  
          }
      }
      else{
        seterrmsg(response.message);

        navigate('/login')  
      }
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
           <h1>Login</h1>
           {errmsg &&<p>{errmsg}</p>}
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
          onClick={signindata}
        >
          SignIn
        </Button>
          </div>
           
            <Button variant='text'>Forgot Password</Button>
            <Button variant="text" onClick={()=>{ navigate(`/register`)}} sx={{mb:2}}>Don't have an account?Register Here</Button>
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;