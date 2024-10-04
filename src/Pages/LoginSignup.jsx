import React, { useState } from 'react'
import styles from './CSS/LoginSignup.module.css'

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:"",
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("login function executed", formData)
  }

  const signup = async () => {
    console.log("signup function executed", formData) 
    
  }


  return (
    <div className={styles.loginSingup}>
      <div className={styles.loginSignupContainer}>
        <h1>{state}</h1>
        <div className={styles.loginSignUpFields}>
          {state === "Sign Up" ? <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' /> : <></>}
          <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address' />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        </div>
        {state === "Sign Up" ?
          <p className={styles.loginSignupLogin}>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p> :
          <p className={styles.loginSignupLogin}>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        }
        <div className={styles.loginSignupAgree}>
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup