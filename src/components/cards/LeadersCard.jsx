import React from 'react'
import "./cards.css"

const LeadersCard = ({leader}) => {
  return (
    <div className="ld-card_container">
        <div className="ld-card_wrapper">
            <img src={leader.img} alt="img" />
            <div className="content">
                <span>{leader.name}</span>
                <span>{leader.position}</span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}
export default LeadersCard