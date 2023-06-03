import React, { useState } from 'react'
import schooldata from "../../data/schools.json"
import faculty from "../../data/faculty.json"
import SchoolCard from '../../components/cards/SchoolCard'
import "./schools.css"
//import data from '../../data/data'

const Schools = () =>{
  const sdata = schooldata
  
  
  return (
    <div className="schools-wrapper">
      <div className="school_tabs">
        <div className="tabs">
          <span className='tab' id='fast'>FAST</span>
          <span className='tab' id='febe'>FEBE</span>
          <span className='tab' id='fsss'>FSSS</span>
        </div>
          <hr />
      </div>
      <div className="heading">
        <span>fucalty of biult enviroment</span>
      </div>
      <div className="schools_container grid">
          {sdata.map(data =>(
            <SchoolCard items={data} key={data.id}/>
        ))}
      </div>  
    </div>
   
  )
}

export default Schools