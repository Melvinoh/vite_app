import React from 'react'
import ComposeForm from '../../components/compose form/ComposeForm'
import Chats from '../../components/chats-components/Chats'
import EventsCalendar from '../../components/events /EventsCalendar'

const Regmember = ({OpenTab,IsActive,close,handleopen,handleswitch,setclose,chatdata}) => {
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
        <div className={`cp-modal ${close ? "active" : ''}`}>
            <ComposeForm close={setclose}/>
        </div>
    </div>
    )
}

export default Regmember