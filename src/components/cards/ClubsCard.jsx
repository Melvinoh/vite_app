import React from 'react'
import { Link } from 'react-router-dom'
import "./cards.css"
const ClubsCard = ({cards}) => {
  return (
    <Link  to={cards.id} className='clubs_cards link'>
        <div className="clubpic">
          <div className="pic">
            <img src={cards.img} alt="" />
          </div>
          <p className="L">{cards.title}</p>
          <div className="details">
            <h4>{cards.block}</h4>
            <p>{cards.room}</p>
            <p>{cards.clubrep}</p>
            <p>{cards.field}</p>
            <p>{cards.sportrep}</p>
            <p>{cards.date}</p>  
          </div>
        </div>
    </Link>
  )
}

export default ClubsCard