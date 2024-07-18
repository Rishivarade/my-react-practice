import React from 'react'   
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div style={{display:"flex",justifyContent:"space-evenly",margin:"auto",backgroundColor:"black",color:"white",padding:"10px"}}>
            <NavLink style={({isActive})=>{
                return isActive?{color:"red"}:{color:"white",textDecoration:"none"}
            }} to={"/home"}>
                HOME
            </NavLink>
            <NavLink style={({isActive})=>{
                return isActive?{color:"red"}:{color:"white",textDecoration:"none"}
            }}  to={"/about"}>
                ABOUT
            </NavLink>
            <NavLink style={({isActive})=>{
                return isActive?{color:"red"}:{color:"white",textDecoration:"none"}
            }}  to={"/login"}>
                LOGIN
            </NavLink>
            <NavLink style={({isActive})=>{
                return isActive?{color:"red"}:{color:"white",textDecoration:"none"}
            }}  to={"/addproduct"}>
                ADDPRODUCT
            </NavLink>
            
        </div>
        </>
    )
}

export default Navbar
