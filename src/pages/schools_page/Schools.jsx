import React from 'react'
import schooldata from "../../data/schools.json"
import SchoolCard from '../../components/schools_card/SchoolCard'
//import data from '../../data/data'

function Schools() {
  const sdata = schooldata
  
  return (
   <div className="schools_container">
    {sdata.map(data =>(
      <SchoolCard items={data} key={data.id}/>
    ))}
    
   </div>
  )
}

export default Schools