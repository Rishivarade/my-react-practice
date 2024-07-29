import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Explore from './pages/Explore'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        {/* <Route path='/cart' element={<Cart/>}></Route> */}
        
    </Routes>
  )
}

export default Allroutes
