import React from 'react'
import { useState , useEffect } from 'react'
import "./clubs.css"
import Chats from '../../components/chats-components/Chats'
import clubchats from "../../data/chats-clubs.json"
import EventsCalendar from '../../components/events /EventsCalendar'
const Club_details = () => {
    const chatdata = clubchats
    const [OpenTab, setOpenTab] = useState(false)
    const [IsActive, setIsActive] = useState(false)
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
    <div className='club_container'>
        <div className="club_tabs">
            <span className={`tabs  ${IsActive ? 'active' : '' }`} onClick={handleswitch}>posts</span>
            <span className={`tabs  ${OpenTab ? 'active' : ''}`} onClick={handleopen}> events</span>
            <span className="tabs ">gallery</span>
        </div>
        <div className="club_content-box">
            <div className={ `cl-left ${OpenTab ? 'active' : ''}`}>
                <div className="chats_wrapper">
                    <div className="chat_title-box">
                        <div className="title">
                            <div><img src="/pictures/mbogi.jpg" alt="img" /></div>
                            <span>rotaract club </span>
                        </div>
                        <span className="date">13/02/2023</span>
                    </div>
                    <div className="chats">
                        {
                        chatdata.map((data ,index)=>(
                            <Chats chats={data} key={index}/>
                        ))
                        }
                    </div>
                    
                </div>
            </div>
            <div className="cl-right">
                <EventsCalendar/>
            </div>
        </div>
     
    </div>
    
    )
}

export default Club_details