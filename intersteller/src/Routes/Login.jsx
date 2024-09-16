import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";


function Login() {
  const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const {user,login}=useContext(Authcontext)
    const navigate= useNavigate()
    console.log(user)
    const handlesubmit = (e) => {
      e.preventDefault()
      let userdata = {
          email, password
      }
      fetch("https://reqres.in/api/login",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
              },
              body:JSON.stringify(userdata)               
      })
      .then((res)=>res.json())
      .then((data)=>{
          
          console.log(data.token)
          if(
            data.token
          ){
            login(data.token)
          }else{
            alert("invalid credentials")
          }
          // login(data.token)
          if(data.token ||
            data.token !== null
          ){
            navigate("/dashboard")
          }
          

      })
      .catch((err)=>console.log(err))

  }
  return (
    <div>
      <form data-testid="login-form" onSubmit={(e) => handlesubmit(e)}>
        <div>
          <label>
            Email
            <input data-testid="email-input" onChange={(e) => setemail(e.target.value)} type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
