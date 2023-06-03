import React from 'react'
import ComposeForm from '../../components/forms/ComposeForm'
import Chats from '../../components/chats-components/Chats'
import EventsCalendar from '../../components/events /EventsCalendar'
import chats from "../../data/chats-clubs.json"
import { useState ,useEffect} from 'react'
import {BsPenFill} from 'react-icons/bs';

const Members = ({}) => {

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
        <div className='Members_container'>
            <h4 className="heading">
                rotaract club
            </h4>
            <div className="tabs-wrapper">
                <span className={`tabs  ${IsActive ? 'active' : '' }`} onClick={handleswitch}>posts</span>
                <span className={`tabs  ${OpenTab ? 'active' : ''}`} onClick={handleopen}> events</span>
                <span className="tabs ">gallery</span>
            </div>
            <div className="Mb_content-box">
                <div className={ `Mb-left ${OpenTab ? 'active' : ''}`}>
                    {
                        chats.map(data =>(
                            <Chats key={data.id} chats={data} />
                        ))
                    }
                    <div className="compose-btn">
                        <BsPenFill onClick={opencomposeform}/>
                    </div>
                </div>
                <div className="Mb-right">
                    <EventsCalendar/>
                </div>
            </div>
        </div>
    </>
    )
}
export default Members