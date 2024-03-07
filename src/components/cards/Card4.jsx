import React from 'react'
import "./cards.css"
import { Link } from 'react-router-dom'

function card4({item}) {
  return (
    <Link to={item.ClubsID}  className=" link">
        <div className="ld-card_container">
        <div className='img'>
            <img src={`/upload/${item.profile_pic}`}alt="" />
        </div>
        <div className="content">
            <span>{item.name}</span>
            <span>{item.block}</span>
            <span>{item.room}</span>
        </div>
        </div>
    </Link>
  )
}

export default card4