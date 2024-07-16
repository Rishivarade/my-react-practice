import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div style={{display:"flex",justifyContent:"space-evenly",margin:"auto"}}>
            <NavLink style={({isActive})=>{
                return isActive?{color:"red"}:{color:"blue"}
            }} to={"/home"}>
                HOME
            </NavLink>
            <NavLink style={({isActive})=>{
                return isActive?{color:"red"}:{color:"blue"}
            }}  to={"/about"}>
                ABOUT
            </NavLink>
            <NavLink style={({isActive})=>{
                return isActive?{color:"red"}:{color:"blue"}
            }}  to={"/login"}>
                LOGIN
            </NavLink>
            <NavLink style={({isActive})=>{
                return isActive?{color:"red"}:{color:"blue"}
            }}  to={"/service"}>
                SERVICE
            </NavLink>
            
        </div>
        </>
    )
}

export default Navbar
