import React from 'react';
import { useState } from 'react';
import {RxCaretDown} from "react-icons/rx";
import "./events.css";

const Events = ({item}) => {
    const [OpenDropdown, setOpenDropdown] = useState(false)

  return (
    <div className="events">
        <div className={`content_box ${OpenDropdown ? 'active' : ''}`}>
            <img src="/pictures/coolboy.jpg" alt="" />
            <div className="tt">
                <h6>{item.name} </h6>
                <span className='date'>{item.date}</span>
            </div>
            <span className='icon' onClick={()=>{setOpenDropdown(!OpenDropdown)}}><RxCaretDown/></span>
        </div>
        <div className={`content ${OpenDropdown ? 'active' : ''}`}>
            <div className="content-wrp">
                <h6>{item.content[0]}</h6>
                <p>
                    {item.content[1]}
                </p>
                <div className="bottom">
                    <span>{item.content[2]} </span>
                    <span>{item.content[3]}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events