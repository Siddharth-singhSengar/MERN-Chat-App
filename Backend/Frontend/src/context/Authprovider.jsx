import React,{createContext, useContext, useState} from "react";
import Cookies from "js-cookie"
export const AuthContext = createContext()

export const Authprovider = ({children}) =>{
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp")
    const [authUser,setauthuser] = useState(initialUserState ? JSON.parse(initialUserState):undefined)
  return (
        <AuthContext.Provider value={[authUser,setauthuser]}>
            {children}
        </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)
