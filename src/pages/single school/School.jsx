import React from 'react'
import "./school.css"
import Chats from '../../components/chats-components/Chats'

const School = () => {
  return (
    <>
    <div className="container">
      <div className="chat_tabs">
        <span className="tabs">
            chats
        </span>
        <span className="tabs">
            events
        </span>
        <span className="tabs">
            gallery
        </span>
      </div>
      <div className="chats">
        <Chats/>
      </div>
    </div>
    </>
   
  )
}

export default School