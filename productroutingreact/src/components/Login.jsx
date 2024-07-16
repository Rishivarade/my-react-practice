import axios from 'axios'
import React, { useState } from 'react'
//Login Function on regres
const Login = () => {
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(email,password)
    let userdata={
      email,password
    }
    axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      let tokenfromserver=res.data.token
      localStorage.setItem("token",tokenfromserver)
  
    })
    .catch((err)=>console.log(err))

  }
  return (
    <div style={{margin:"auto",textAlign:"center"}}>
        <h1>Login</h1> 
        <form action="" onSubmit={(e)=>handlesubmit(e)}>
          <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter Email...' />
          <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password...' />
          <input type="submit" />
        </form>     
    </div>
  )
}

export default Login
