import React from 'react'
import { Link } from 'react-router-dom'
import "./schoolcard.css"

const SchoolCard = ({items}) => {
  return (
    <Link to={items.id} className="schoolcard_container">
      <div>
        <div className="schoolpic">
            <img src={items.img} alt="" />
        </div>
        <div className="heading ">
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