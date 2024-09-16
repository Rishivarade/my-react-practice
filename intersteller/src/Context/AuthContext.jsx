import { createContext, useState } from "react";

export const Authcontext = createContext()
function AuthContextProvider({ children }) {
    const [user, setuser] = useState({
        isAuth: false,
        loading: false,
        error: null,
        token: ""
      });
      const login = (value) => {
        setuser(
          {
            isAuth: true,
            loading: false,
            error: null,
            token: value,
          }
        )
      }
      const logout=()=>{
        setuser(
          {
            isAuth: false,
            loading: false,
            error: null,
            token:"",
          }
        )
      }
    
      return (
        <Authcontext.Provider value={{user,login,logout}}>{children}</Authcontext.Provider>
      )
    }


export default AuthContextProvider;
