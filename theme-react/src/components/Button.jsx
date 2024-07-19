import React, { useContext } from 'react'
import { themecontext } from '../Context/ThemeContext'

const Button = () => {
    const { themeUpdaterfunction, theme } = useContext(themecontext)
    return (
        <div>
            <button style={{
                backgroundColor: theme == "light" ? "white" : "black", color: theme== "light" ? "black" : "white",marginTop:"10px"}} onClick={() => themeUpdaterfunction("dark")}>Change Theme
            </button>
        </div>
    )
}

export default Button
