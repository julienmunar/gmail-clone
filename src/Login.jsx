import { Button } from '@mui/material'
import React from 'react'
import './login.css'
import { auth } from './firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
const Login = () => {
    const auth=getAuth()
    const provider = new GoogleAuthProvider();
    const dispatch=useDispatch()
    const signIn=()=>{
        signInWithPopup(auth,provider).then((result =>{
            const user=result.user
            dispatch(login({displayName:user.displayName, email:user.email,photoUrl:user.photoURL}))
        }))

    }
  return (
    <div className='login'>
        
            <div className="login__container">

                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="" />    
                <Button variant='contained' onClick={signIn}>Login</Button>
            </div>
            
    </div>
  )
}

export default Login