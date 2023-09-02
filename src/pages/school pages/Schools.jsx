import React, { useState } from 'react'
import schooldata from "../../data/schools.json"
import faculty from "../../data/faculty.json"
import SchoolCard from '../../components/cards/SchoolCard'
import "./schools.css"
//import data from '../../data/data'
import {  useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../../axios'

const Schools = () =>{
  const sdata = "3238a35e-6d57-4221-a4f4-44b1ea64579c"

  const[facultyID, setFacultyID] = useState(sdata)

  const handleFaculties = (facultyId) =>{

    console.log(facultyId);
    setFacultyID(facultyId);


  }
 
  
  const queryClient = useQueryClient();
  const [ facultiesQuery, schoolsQuery] = useQueries({
    queries:[
        {
            queryKey:['faculties'],
            queryFn: () => makeRequest.get("/schools/getFaculties").then((res)=> res.data)
        },
    
        {
            queryKey:['schools',facultyID],
            queryFn: () => makeRequest.get("/schools/getSchools?facultyId="+facultyID).then((res)=> res.data)
        },
       
    ],
    queryClient,
  });
  console.log(facultiesQuery.data)
 
  
  return (
    <div className="wrapper-con">
      <div className="schools-wrapper">
        <div className="school_tabs">
          <div className="tabs">
            {facultiesQuery.data?.map(faculty =>(<span className='tab'  key={faculty.FacultyID} onClick={()=>{handleFaculties(faculty.FacultyID)}}>{faculty.name}</span>) )}
          </div>
          <hr />
        </div>
        <div className="heading1">
          {
            facultiesQuery.data?.map((heading) => {
              if (facultyID === heading.FacultyID) {
                return <span key={heading.FacultyID}>{heading.fullname}</span>
              }
            })
          }
        </div>
        <div className="schools_container grid">
            {schoolsQuery.data?.map(data =>(
              <SchoolCard items={data} key={data.SchoolID}/>
          ))}
        </div>  
      </div>
    </div>
    
   
  )
}

export default Schools