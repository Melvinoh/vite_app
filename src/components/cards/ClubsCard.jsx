import React from 'react'
import { Link } from 'react-router-dom'
import "./clubs_card.css"
const ClubsCard = ({cards}) => {
  return (
    <Link  to={cards.id} className='clubs_cards'>
        <div className="clubpic">
          <div className="pic">
            <img src={cards.img} alt="" />
          </div>
         
          <p className="name">{cards.title}</p>
        </div>
    </Link>
  )
}

export default ClubsCard