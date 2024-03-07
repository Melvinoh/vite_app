import React from 'react'
import { Link } from 'react-router-dom'
import "./cards.css"

const SchoolCard = ({items}) => {
  return (
    <Link to={items.SchoolID} className="schoolcard_container">
      
        <div className="schoolpic">
          <img src={`/pictures/${items.profile_pic}`} alt=""  />
        </div>
        <div className="names">
            <span>{items.name}</span>
        </div>
        <div className="block link" >
            <span>{items.description}</span>
        </div>
      
    </Link>

  )
   
   
}

export default SchoolCard