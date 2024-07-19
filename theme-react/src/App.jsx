import { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Button from './components/Button'
import { themecontext } from './Context/ThemeContext'
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

function App() {
  const { themeUpdaterfunction, theme } = useContext(themecontext)

  return (
    <>
      <a style={{ border: "2px solid black", borderRadius: "25px", padding: "5px 10px", 
        backgroundColor: theme == "light" ? "black" : "white", 
        color: theme == "light" ? "white" : "black" }} 
        onClick={() => themeUpdaterfunction("dark")}>
          {theme == "light" ? <FaMoon /> : <IoSunnyOutline />}
      </a>
      
      <div className="div" style={{ backgroundColor: theme == "light" ? "white" : "black", color: theme == "light" ? "black" : "white",border:"2px solid black",marginTop:"10px"}}>

        <Navbar />
        <Section />
      </div>
      <Button />
    </>
  )
}

export default App
