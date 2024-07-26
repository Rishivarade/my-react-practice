import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../service/firebase'
const Login = () => {
    const handlelogin=()=>{
        signInWithPopup(auth, provider)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
    return (
        <div>
            <h1>Login</h1>
            <GoogleButton onClick={handlelogin  }/>
        </div>
    )
}

export default Login
