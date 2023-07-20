import React from 'react'
import { Link } from 'react-router-dom'

const Card3 = ({cards}) => {
  return (
    <Link  to={cards.ClubsID} className='card3-container link' key={cards.id}>
        <div className="card3-pic">
          <img src={`/pictures/${cards.profile_pic}`} alt="" srcset="" />
        </div>
        <div className="card3-content">
            <p>{cards.name}</p>
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
export default Card3;