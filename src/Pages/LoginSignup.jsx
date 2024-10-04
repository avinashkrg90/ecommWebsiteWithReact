import React, { useContext, useState } from 'react'
import styles from './CSS/LoginSignup.module.css'
import { app } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginSignup = () => {

  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const {loginState, setLoginState} = useContext(UserContext)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })
  const [error, setError] = useState(null);
  const auth = getAuth();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("login function executed", formData)
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User signed in successfully!');
      setLoginState(true);
      navigate('/');
      toast.success('Login successful!', {position: "top-center", autoClose: 2000,});
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      toast.error('Oops, invalid credential!', {position: "top-center", autoClose: 2000,});
    }
  }

  const signup = async () => {
    console.log("signup function executed", formData)
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User signed up successfully!');
      toast.success('You have been registered successfully!', {position: "top-center", autoClose: 2000,});
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }

  }

  return (
    <div className={styles.loginSingup}>
      <div className={styles.loginSignupContainer}>
        <h1>{state}</h1>
        <div className={styles.loginSignUpFields}>
          {state === "Sign Up" ? <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' /> : <></>}
          <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address' />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
          <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        </div>
        {state === "Sign Up" ?
          <p className={styles.loginSignupLogin}>Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p> :
          <p className={styles.loginSignupLogin}>Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>
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