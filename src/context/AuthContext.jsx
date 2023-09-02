import {createContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { io } from "socket.io-client";

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [socket ,setSocket] = useState(null)
    // useEffect(()=>{
    //     const socketio = io("http://localhost:5000");
    //     setSocket(socketio)
   
    //  },[]);
    // console.log(socket);

    const[openform ,setOpenform] = useState(false);
    const OpenformHandler = ()=>{
      setOpenform(!openform)
    };

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [ClubsContent, setClubsContent] = useState({});
    const [Error, setError] = useState(null);

    const loginForm = async (Inputs) =>{
        try {
            const response = await axios.post("http://localhost:8800/api/auth/login", Inputs, {
                withCredentials: true,
            })
            setCurrentUser(response.data)
            // const socketio = io("http://localhost:5000");
            // setSocket(socketio)
           
        } catch (err) {
            console.log(err)
            setError()       
        }

        OpenformHandler();
    }   
   
    const logout = async () =>{
        try {
            await axios.get("http://localhost:8800/api/auth/logout");
            localStorage.removeItem("user");
        } catch (err) {
            console.log(err)
            setError(err.response.data)  
            setCurrentUser(null);            
        }
    }
    useEffect(()=>{
        if (currentUser){
         localStorage.setItem("user", JSON.stringify(currentUser));
        } 
        // const socketio = io("http://localhost:5000");
        //  setSocket(socketio)
        // loginForm();
     },[currentUser]);
     
  
    
     
  

   

    const getClubs = async () =>{
        try {
            const response = await axios.get("http://localhost:8800/api/clubs/getClubs");
            setClubsContent(response.data);
            console.log(setClubsContent)
        } catch (err) {
            setError(err.response.data)
        }
    }

   console.log(socket)

    return(
        <AuthContext.Provider value={{loginForm, currentUser, setCurrentUser, logout, Error,getClubs,ClubsContent}}>
            {children}
        </AuthContext.Provider>
    )

}