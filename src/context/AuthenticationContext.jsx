import axios from "axios";
import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { json } from "react-router-dom";

export const authContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [Currentuser, setCurrentuser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    useEffect(() => {
        localStorage.setItem("user", json.stringify(Currentuser))
      }, [Currentuser])
      
    const LoginSubmit = async (LoginInputs) =>{
        const response = await axios.post("http://localhost:8800/api/auth/login", LoginInputs, {
            withCredentials: true,
        })
        setCurrentuser(response.data)
    }
    return (
        <AuthContextProvider value={{Currentuser, LoginSubmit}}>
            {children}
        </AuthContextProvider>

    )
}
export const  useAuthContext = () =>{
        return useContext(authContext)
}

