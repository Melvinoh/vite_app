import React from 'react'
import { Link } from 'react-router-dom'
import "./cards.css"

const SchoolCard = ({items}) => {
  return (
    <Link to={items.id} className="schoolcard_container">
      <div>
        <div className="schoolpic">
            <img src={items.img} alt="" />
        </div>
        <div className="names">
            <span>{items.name}</span>
        </div>
        <div className="block link" >
            <span>{items.block}</span>
        </div>
      </div>
    </Link>

  )
   
   
}

export default SchoolCard