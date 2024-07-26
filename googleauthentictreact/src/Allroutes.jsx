import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Product from './pages/Product'
import Home from './pages/Home'
import Privatepage from './components/Privatepage'


const Allroutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/product" element={
      <Privatepage>
        <Product/>
      </Privatepage>
      } />
   </Routes>

  )
}

export default Allroutes
