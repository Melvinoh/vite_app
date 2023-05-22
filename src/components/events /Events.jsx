import React from 'react'
import "./events.css"

const Events = ({item}) => {
  return (
    <div className="events">
        <div className="content_box">
            <img src="/pictures/coolboy.jpg" alt="" />
            <div className="tt">
                <h6>{item.name} </h6>
                <span className='date'>{item.date}</span>
            </div>
            <span>click</span>
        </div>
        <div className="content">
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
  )
}

export default Events