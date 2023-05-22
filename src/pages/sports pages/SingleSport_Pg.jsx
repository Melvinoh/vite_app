import React from 'react'
import Chats from '../../components/chats-components/Chats'
import EventsCalendar from '../../components/events /EventsCalendar'
import chats from "../../data/chats-clubs.json"
const Sport = () => {
  return (
  <div className="sport-container">
      <h4 className="heading">
        foot ball sport
      </h4>
      <div className="sport-wrapper">
        <div className="sp-left">
         {
            chats.map(data =>(
                <Chats key={data.id} chats={data} />
            ))
         }
        </div>
        <div className="sp-right">
            <EventsCalendar/>
        </div>
    </div>
  </div>
 
  )
}

export default Sport