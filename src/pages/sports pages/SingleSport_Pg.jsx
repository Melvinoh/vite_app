import React from 'react'
import { useState } from 'react'
import Chats from '../../components/chats-components/Chats'
import EventsCalendar from '../../components/events /EventsCalendar'
import chats from "../../data/chats-clubs.json"
import {BsPenFill} from 'react-icons/bs';
import ComposeForm from '../../components/forms/ComposeForm';
const Sport = () => {

  const [OpenCompose, setOpenCompose] = useState(false)
  const opencomposeform  = ()=>{
    setOpenCompose(!OpenCompose)
  }
  const closecompose = () =>{
    setOpenCompose(false)
  }
  return (
    <>
      <div className="form-modal">
            <ComposeForm isOpen={OpenCompose} close={closecompose}/>
          </div>
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
            <div className="compose-btn">
              <BsPenFill onClick={opencomposeform}/>
            </div>
          </div>
          <div className="sp-right">
              <EventsCalendar/>
          </div>
        </div>
      </div>
    </>
  
 
  )
}

export default Sport