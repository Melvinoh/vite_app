import React from 'react'

const SchoolCard = ({items}) => {
  return (
    <div className="schoolcard_container">
        <div className="schoolpic">
            <img src={items.img} alt="" />
        </div>
        <div className="name">
            <span>{items.name}</span>
        </div>
        <div className="block">
            <span>{items.block}</span>
        </div>
    </div>
  )
}

export default SchoolCard