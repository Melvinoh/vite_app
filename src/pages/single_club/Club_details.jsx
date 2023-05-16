import React from 'react'
import "./club_details.css"
import Chats from '../../components/chats-components/Chats'
import clubchats from "../../data/chats-clubs.json"
const Club_details = () => {
    const chatdata = clubchats
  return (
    <div className="club_wrapper">
        <div className="chat_tabs">
            <span className="tabs">chats</span>
            <span className="tabs">events</span>
            <span className="tabs">gallery</span>
        </div>
        <div className="chats_wrapper">
            <div className="chat_title">
                <div className="ttwrap title">
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
  )
}

export default Club_details