import {createContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [UserContent, setUserContent] = useState({});
    const [Error, setError] = useState(null);

    const loginForm = async (Inputs) =>{
        try {
            const response = await axios.get("http://localhost:8800/api/auth/login", Inputs)
            setUserContent(response.data)
            console.log(UserContent)
        } catch (err) {
            setError(err.response.data)            
        }
    }

    return(
        <AuthContext.Provider value={{loginForm, UserContent, Error}}>
            {children}

        </AuthContext.Provider>
    )

}