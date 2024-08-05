import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Explore from './pages/Explore'
import Descriptionpage from './components/Descriptionpage'
import AddtoCart from './components/AddtoCart'
import Login from './pages/Login'
import Privatepage from './components/Privatepage'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={
          <Privatepage>
            <Product/>
          </Privatepage>          
          }></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/description/:id' element={<Descriptionpage/>}></Route>
        <Route path='/cart' element={<AddtoCart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default Allroutes
