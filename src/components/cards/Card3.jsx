import React from 'react'
import { Link } from 'react-router-dom'

const Card3 = ({cards}) => {
    console.log(cards)
  return (
    <Link  to={cards.id} className='card3-container link' key={cards.id}>
        <div className="card3-pic">
            <img src={cards.img} alt="" />
        </div>
        <div className="card3-content">
            <p>{cards.title}</p>
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