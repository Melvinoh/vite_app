import React from 'react'
import { useState , useEffect } from 'react'
import "./clubs.css"
import clubchats from "../../data/chats-clubs.json"
// import Regmember from './Regmember'
import ClubReg from './ClubReg'
const Club_details = () => {
    const chatdata = clubchats
    const [OpenTab, setOpenTab] = useState(false)
    const [IsActive, setIsActive] = useState(false)
    const [close, setclose] = useState(false)
    useEffect(() => {
        window.addEventListener('load' , setIsActive(true))
        return () => {
          window.removeEventListener('load', setIsActive(false))
        }
      }, [])
    const handleopen = () =>{
        setOpenTab(true)
        setIsActive(false)
    }
    const handleswitch = () =>{
        setOpenTab(false)
        setIsActive(true)
    }
  return (
  <>
    {/* <Regmember chatdata={chatdata} OpenTab={OpenTab} IsActive={IsActive} close={close} handleopen={handleopen} handleswitch={handleswitch} setclose={setclose}/> */}
    <ClubReg/>
  </>
    
    )
}

export default Club_details