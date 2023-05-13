import React, { useState } from 'react'
import schooldata from "../../data/schools.json"
import faculty from "../../data/faculty.json"
import SchoolCard from '../../components/cards/SchoolCard'
import "./schools.css"
//import data from '../../data/data'

function Schools() {
  const sdata = schooldata
  const fdata = faculty
  const [OpenTab , setOpenTab] = useState(false);

  const opentab = () => {
    for (var i in fdata) {
      var element = fdata[0].facultyid;
      console.log(element) 
    }
    for(var j in sdata){
      if (sdata[j].facultyid === element){
      const logdata = sdata[j]
      console.log(logdata)
      }
    }
    setOpenTab(true)
  }
 
  
  
  return (
    <>
    <div className="school_tabs">
        <div className="tabs">
          <span className='tab' id='fast' onClick={opentab}>FAST</span>
          <span className='tab' id='febe'>FEBE</span>
          <span className='tab' id='fsss'>FSSS</span>
        </div>
        <hr />
    </div>
      {OpenTab && 
        <div className="schools_container grid">
            {sdata.map(data =>(
            <SchoolCard items={data} key={data.id}/>
          ))}
        </div>  
      }
    </>
   
  )
}

export default Schools