import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Service from './Service'
import Privatepage from './Privatepage'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={
          <Privatepage>
            <About/>
          </Privatepage>         
          }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
    </Routes>
  )
}

export default AllRoutes;
