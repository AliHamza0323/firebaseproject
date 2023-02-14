import React from 'react'
import '../singup/style.css';
import { loginuser } from '../../config/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    const navigate=useNavigate()

    const [formData, setFormData] = useState({})
    console.log(formData)


    
  return (
    <div>
    <div className="loginpage"> 
      <img src="https://www.olx.com.pk/assets/iconOLXLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" alt="this is an img"/>
      <h2>WELCOME TO OLX</h2>
      <h3>The trusted community of <br/> buyers and sellers.</h3>
  <div className="loginlabel">
          <label for="">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;:&nbsp;</label>
          <input type="email" name="" id="semail"  onChange={(event) => setFormData({ ...formData, email: event.target.value })}/>
          <br/><br/>

          <label for="">Password :&nbsp;</label>
          <input type="password" name="" id="spass"  onChange={(event) => setFormData({ ...formData, password: event.target.value })}/>
          <br/><br/>
  </div>
  <br/>
          <button class="loginbutton" onClick={() => {loginuser(formData)}}>Login</button>
      <p className="loginpara">Create your account,<p onClick={() => navigate('/')}>Go to signup page.</p></p>
  
      </div>
  </div>
  )
}

export default Login;
