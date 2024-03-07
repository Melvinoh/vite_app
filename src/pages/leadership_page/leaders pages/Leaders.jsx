import React from 'react'
import LeadersCard from '../../../components/cards/LeadersCard'
import leaders from "../../../data/leaders.json"
import "./leaders.css"
function Leaders() {
  return (
    <div className="wrapper-con">
      <div className="leaders-wrapper">
        <span className="heading1"> Satuk leadership</span>
        
        <div className=''>
          <div className='heading1'>exceutive leaders</div>
          <div className="card4-wrapper">
            {
              leaders.map(data =>(<LeadersCard key={data.id} item={data}/>))
            }
          </div>
        </div>
        <div className=''>
          <div className='heading1'>school congress</div>
          <div className="leaders_wrapper grid">
            {
              leaders.map(data =>(<LeadersCard key={data.id} item={data}/>))
            }
          </div>
        </div>
        
      </div>
    </div>
  ) 
}

export default Leaders