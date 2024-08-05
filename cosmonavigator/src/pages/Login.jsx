import React from 'react'
import { auth, provider } from '../Service/Firebase'
import GoogleButton from 'react-google-button'
import { signInWithPopup } from 'firebase/auth'
import { FacebookLogin } from 'react-facebook-login'

const Login = () => {
    const handlelogin = () => {
        signInWithPopup(auth, provider)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    return (
        <>
            <div className='conatainer log col-6'>
                <div className="col-6 p-4 m-auto" style={{border:"2px solid black"}}>
                <div className="div text-center" >
                   <h1>SIGN IN</h1>
                   <p>Create Account?</p>
                </div>
                
                <GoogleButton className='' style={{border:"1px solid black"}} onClick={handlelogin} />
                 <button className='mt-5' style={{border:"1px solid black"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJf6fHyR1Qk6pCY9kfjzeUQHmp3cPtODbOQ&s" width={50} height={50} alt="" /> Login in With Facebook</button>
                </div>
               
            </div>
        </>

    )
}

export default Login
