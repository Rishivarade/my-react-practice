import React, { useCallback, useContext } from 'react'
import { themecontext } from '../Context/ThemeContext'

const Navbar = () => {
    const {theme}=useContext(themecontext)
  return (
    <div>
      <h1>Navbar</h1>
      <p>Theme is {theme}</p>
    </div>
  )
}

export default Navbar
