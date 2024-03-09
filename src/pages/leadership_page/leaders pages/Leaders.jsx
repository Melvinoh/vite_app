import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { makeRequest } from '../../../../axios'
import LeadersCard from '../../../components/cards/LeadersCard'
import "./leaders.css"
function Leaders() {

  const{isLoading,data,error}= useQuery(['leaders'] , async () =>{
      const res = await makeRequest.get("/Leaders/getLeaders")
      return res.data

  })
  if(isLoading)return <div> loading ... </div>
  if(error)return <div> {error.message.data}</div>
  
  
  return (
    <div className="wrapper-con">
      <div className="leaders-wrapper">
        <span className="heading1"> Satuk leadership</span>
        
        <div className=''>
          <div className='heading1'>exceutive leaders</div>
          <div className="card4-wrapper">
            {
              data.map(data =>(<LeadersCard key={data.id} item={data}/>))
            }
          </div>
        </div>
        <div className=''>
          <div className='heading1'>school congress</div>
          <div className="leaders_wrapper grid">
            {
              data.map(data =>(<LeadersCard key={data.id} item={data}/>))
            }
          </div>
        </div>
        
      </div>
    </div>
  ) 
}

export default Leaders