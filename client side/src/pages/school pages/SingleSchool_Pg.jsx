import React from 'react'
import {useState} from 'react'
import "./schools.css"
import Courses from '../../components/courses/Courses'
import {MdArrowBack} from "react-icons/md";
import Schoolhome from '../../components/school components/Schoolhome.jsx'
const School = () => {
  const [OpenCourse, setOpenCourse] = useState(false)
  const openhandler = () =>{
    setOpenCourse(!OpenCourse)
  }
  return (
    <>
    <div className="school-container">
      <div className={`sh-left ${ OpenCourse ? 'active' : ''}`}>
       
        <Schoolhome open={OpenCourse} fun={openhandler}/>
      </div>
      <div className="sh-right">
       <div className="back">
        <MdArrowBack/>
        <span className='' onClick={openhandler}> back</span>
       </div>
        <Courses/>
      </div>
    </div>
    </>
   
  )
}

export default School