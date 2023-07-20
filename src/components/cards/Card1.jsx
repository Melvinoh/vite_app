import React from 'react'
import { Link } from 'react-router-dom'

const Card1 = ({item2}) => {
  return (
    <Link to={item2.ClubsID} className="cd1-container">
        <div className="cd1-pic">
          <img src={`/pictures/${item2.profile_pic}`} alt="" srcset="" />
        </div>
        <div className="cd1-content">
            <span>{item2.name}</span>
        </div>
    </Link>
  )
}

export default Card1