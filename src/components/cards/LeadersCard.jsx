import React from 'react'
import "./cards.css"
import { Link } from 'react-router-dom'

const LeadersCard = ({item}) => {
  return (
    <Link to={`/profile/[${item.profile_pic}]`}  className=" link">
      <div className="ld-card_container">
        <div className='img'>
          <img src={`/upload/${item.profile_pic}`}alt="" />
        </div>
        <div className="content">
          <span>{item.fname} {item.sname}</span>
          <span className='heading3'>{item.position}</span>
          <span>{item.contacts}</span>
          <span>{item.year}</span>

        </div>
      </div>
    </Link>
  )
}
export default LeadersCard