import { useContext, useState } from 'react'
import './App.css'
import Allroutes from './Allroutes'
import Navbar from './components/Navbar'
import { themecontext } from './Context/ThemeContext';
import { auth } from './Service/Firebase';
function App() {
  const { theme } = useContext(themecontext)
  return (
    <>
     
     <div className="div" style={{ backgroundColor: theme == "light" ? "white" : "black", color: theme == "light" ? "black" : "white"}}>
     <Navbar />
     <Allroutes />
     </div>
      
     
    </>
  )
}

export default App
