import React from 'react'
import "./cards.css"
import { Link } from 'react-router-dom'

const LeadersCard = ({item}) => {
  return (
    <Link to={item.ClubsID}  className="ld-card_wrapper link">
      <div className="ld-card_container">
          <div className='img'>
            <img src={`/pictures/${item.profile_pic}`}alt="" srcset="" />
          </div>
          <div className="content">
              <span>{item.name}</span>
              <span className='heading3'>{item.position}</span>
              <span>{item.block}</span>
              <span>{item.room}</span>
          </div>
      </div>
    </Link>
  )
}
export default LeadersCard