import React, { createContext, useContext, useState } from 'react';
import cookies from "js-cookie";
export const AuthContext=createContext();




export const Authprovider=({children})=> {
    const initialState=cookies.get("jwt")||localStorage.getItem("chatapp");

    const [Authuser,setAuthuser]=useState(
        initialState?JSON.parse(initialState):null
    );
  return (
    <AuthContext.Provider value={[Authuser,setAuthuser]}>
        {children}
    </AuthContext.Provider>
    
  )
}
export const useAuth=()=>useContext(AuthContext);

