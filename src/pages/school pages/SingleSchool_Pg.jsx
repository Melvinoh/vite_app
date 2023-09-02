import React from 'react'
import {useState} from 'react'
import "./schools.css"
import Courses from '../../components/courses/Courses'
import {MdArrowBack} from "react-icons/md";
import Schoolhome from '../../components/school components/Schoolhome.jsx'
import {  useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { makeRequest } from '../../../axios';


const School = () => {
  const [OpenCourse, setOpenCourse] = useState(false)
  const openhandler = () =>{
    setOpenCourse(!OpenCourse)
  }

  const SchoolId = useLocation().pathname.split("/")[2]
  console.log(SchoolId);
  
  const {isLoading , data , error} = useQuery(["singleschool"], async () =>{
    const response = await axios.get("http://localhost:8800/api/schools/getSingleschool?SchoolId="+SchoolId);
    return response.data;
  });
  

  return (
    <>
    <div className="wrapper-con">
      <div className="">
        <div >
          <Schoolhome open={OpenCourse} data={data}  fun={openhandler}/>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default School