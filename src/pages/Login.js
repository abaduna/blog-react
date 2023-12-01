import React from 'react'
import {auth,provider} from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from 'react-router-dom'




const Login = ({setIsAuth,isAuth}) => {
  let navigater = useNavigate()
  const signInWithGoogle = ()=>{
    console.log(`signInWithGoogle`);
   signInWithPopup(auth,provider).then((result)=>{
    console.log(`signInWithPopup`);
    localStorage.setItem("isAuth", true)
    setIsAuth(true)
    navigater("/")
   })

  }
  return (
    <div className='loginPages'>
        <p>Sign in With Google Continue</p>
        <button 
          className='login-with-google-btn'
           onClick={signInWithGoogle}>
            Sign in With Google
        </button>
    </div>
  )
}
export default Login