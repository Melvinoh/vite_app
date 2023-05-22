import React from 'react'
import LeadersCard from '../../../components/cards/LeadersCard'
import leaders from "../../../data/leaders.json"
import "./leaders.css"
function Leaders() {
  return (
   <div className="leaders_container">
      <span className="heading"> Satuk leadership</span>
      <div className="leaders_wrapper grid">
        {
          leaders.map(data =>(<LeadersCard key={data.id} leader={data}/>))
        }
      </div>
   </div>
  )
}

export default Leaders