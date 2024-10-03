import React from 'react'
import styles from './CSS/LoginSignup.module.css'

const LoginSignup = () => {
  return (
    <div className={styles.loginSingup}>
      <div className={styles.loginSignupContainer}>
        <h1>Sign Up</h1>
        <div className={styles.loginSignUpFields}>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button>Continue</button>
        </div>
        
        <p className={styles.loginSignupLogin}>Already have an account? <span>Login here</span></p>
        <div className={styles.loginSignupAgree}>
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup