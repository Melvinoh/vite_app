import React from 'react'
import "./schoolcard.css"

const SchoolCard = ({items}) => {
  return (
      <div className="schoolcard_container">
        <div className="schoolpic">
            <img src={items.img} alt="" />
        </div>
        <div className="heading">
            <span>{items.name}</span>
        </div>
        <div className="block">
            <span>{items.block}</span>
        </div>
      </div>
    
  )
   
   
}

export default SchoolCard