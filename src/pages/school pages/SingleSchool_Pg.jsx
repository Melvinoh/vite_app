import React from 'react'
import "./schools.css"
import Courses from '../../components/courses/Courses'
import Schoolhome from '../../components/school components/Schoolhome.jsx'
const School = () => {
  console.log
  return (
    <>
    <div className="school-container">
      <div className="sh-left">
        <Schoolhome/>
      </div>
      <div className="sh-right">
        <Courses/>  
      </div>
    </div>
    </>
   
  )
}

export default School