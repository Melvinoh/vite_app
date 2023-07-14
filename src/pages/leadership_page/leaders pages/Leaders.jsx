import React from 'react'
import LeadersCard from '../../../components/cards/LeadersCard'
import leaders from "../../../data/leaders.json"
import "./leaders.css"
function Leaders() {
  return (
    <div className="wrapper-con">
      <div className="leaders-wrapper">
        <span className="heading1"> Satuk leadership</span>
        <div className="leaders_wrapper grid">
          {
            leaders.map(data =>(<LeadersCard key={data.id} leader={data}/>))
          }
        </div>
      </div>
    </div>
  ) 
}

export default Leaders