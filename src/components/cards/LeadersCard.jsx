import React from 'react'
import "./cards.css"

const LeadersCard = ({leader}) => {
  return (
    <div className="ld-card_wrapper">
        <div className="ld-card_container">
            <img src={leader.img} alt="img" />
            <div className="content">
                <span>{leader.name}</span>
                <span className='heading3'>{leader.position}</span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}
export default LeadersCard