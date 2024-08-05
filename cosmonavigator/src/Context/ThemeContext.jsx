import { createContext, useState } from "react";

//Create Context
export const themecontext=createContext()

//Provide Context
export function ThemeContexProviderFunction({children}){
    const [theme,setheme]=useState("light")

    //theme updater function
    const themeUpdaterfunction=()=>{
        setheme(theme=="light"?"dark":"light")
    }
    return(
        <themecontext.Provider value={{theme,themeUpdaterfunction}}>{children}</themecontext.Provider>
    )
}
