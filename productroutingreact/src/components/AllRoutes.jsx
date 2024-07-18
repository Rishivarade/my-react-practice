import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Privatepage from './Privatepage'
import Addproduct from './Addproduct'
import Description from './Description'
import Editpage from './Editpage'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={
        <Privatepage>
          <About />
        </Privatepage>
      }>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/addproduct' element={
        <Privatepage>
          <Addproduct />
        </Privatepage>
      }
      ></Route>
      <Route path='/descriptionpage/:id' element={<Description/>}></Route>
      <Route path='/editproduct/:id' element={<Editpage/>}></Route>
    </Routes>
  )
}

export default AllRoutes;
