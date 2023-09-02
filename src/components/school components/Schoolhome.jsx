import React from 'react'
import {useState} from 'react'
import { FiDownload } from 'react-icons/fi'
import "./schoolhome.css"
import cdata from "../../data/courses.json"
import {  useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { makeRequest } from '../../../axios'
import {MdArrowBack} from "react-icons/md";
import Courses from '../../components/courses/Courses'

const Schoolhome = ({fun, data}) => {

    const [OpenCourse, setOpenCourse] = useState(false)
    const openhandler = () =>{
        setOpenCourse(!OpenCourse)
    }

    const [courseId, setCourseId] = useState()
    
    const [ActiveTab, setActiveTab] = useState('btech')
  
    const queryClient = useQueryClient();

    const [ CoursesQuery, courseQuery] = useQueries({
        queries:[
            {
                queryKey:['Courses',data?.SchoolID],
                queryFn: () => makeRequest.get("/schools/getCourses?SchoolId="+data.SchoolID).then((res)=> res.data)
            },
        
            {
                queryKey:['course', courseId],
                queryFn: () => makeRequest.get("/schools/getCourse?CourseId="+courseId).then((res)=> res.data)
            },
        
        ],
        queryClient,
    });
    

    let tabs = []
    CoursesQuery.data?.map((ctabs)=>{
        if(!tabs.some((tabs) => tabs === ctabs.Course_category)){
            tabs.push(ctabs.Course_category)
        }
    })
    // console.log(tabs)

    // console.log(CoursesQuery.data)
    
    const handleclick = (courseID)=>{
        setCourseId(courseID)

    }
    console.log(courseQuery.data)
  return (
    <div className="school-container">
        <div className={`sh-left ${ OpenCourse ? 'active' : ''}`}>
            <div className="sh_wrapper">
                <div className="heading1">{data?.name}</div>
                <div className="sh-profiles">
                    <div className="img_wrapper">
                    <img src={`/pictures/${data?.profile_pic}`} alt=""  />
                    </div>
                    <div className="content">
                        <span>{data?.block}</span>
                        <span>Director :{data?.directors_id}</span>
                        <span>Email :profsalesio@tukstaf.ac.ke</span>
                        <span>tel:+254768909345</span>
                    </div>
                </div>
                <div className="sh-container 1">
                    <div className="heading2">
                        <span>courses</span>
                    </div>
                    
                        <div className="sh-tab_container">
                            <div className={`sh-tab_heading`}>
                                {
                                    tabs.map((ctabs) =>(
                                        <span className={`tab ${ActiveTab === ctabs ? 'active' : ''}`} onClick={()=>setActiveTab(ctabs)}>{ctabs}</span>
                                    ))
                                }
                            </div>
                            <div className={`sh-tab_content ` } key={cdata.id} onClick={openhandler}>
                                {
                                    CoursesQuery.data?.map((cdata)=>{
                                        if(cdata.Course_category === ActiveTab){
                                            return  (<span className={`item `} onClick={() => handleclick(cdata.CourseID)}>{cdata.name}</span>)
                                        }
                                    })
                                }
                            </div>
                        </div>           
        
                    {}
                    
                </div>
                <div className="sh-container 2">
                    <div className="heading2">
                        <span> notice board </span>
                    </div>
                    <div className="sh-tab_container">
                        <div className="sh-tab_heading">
                            <span>active notices</span>
                            <span>past notices</span>
                        </div>
                        <div className="sh-tab_content">
                            <div className="content-wrapper">
                                <div className='content-header'>
                                    <span>exam timetable download</span>
                                    <span><FiDownload/></span>
                                </div>
                                <div className='content'>
                                    <span></span>    
                                </div>
                            </div>
                            <div className="content-wrapper">
                                <div className='content-header'>
                                    <span>Semister time table download </span>
                                    <span><FiDownload className=''/></span>
                                </div>
                                <div className='sh-content'>
                                    <span></span>    
                                </div>
                            </div>
                            <div className="content-wrapper">
                                <div className='content-header'>
                                    <span>first year orientation</span>
                                    <span>13/02/2023</span>
                                </div>
                                <div className='sh-content'>
                                    <span>The first year orientation is scheduled to begin  0n 02/10/2023</span>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sh-container">
                    <div className="heading2">
                        <span>leaders</span>
                    </div>
                    <div className="ld-card_wrapper">
                        <div className="ld-card_container">
                            <img src="/pictures/mrform.jpg" alt="img" />
                            <div className="content">
                                <span>congress man </span>
                                <span>+254 768 909 767 </span>
                                <span className='button'>view profile</span>
                            </div>
                        </div>
                        <div className="ld-card_container">
                            <img src="/pictures/customercare.PNG" alt="img" />
                            <div className="content">
                                <span>congress lady </span>
                                <span>+254 768 909 767 </span>
                                <span className='button'>view profile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="sh-right">
            <div className="back">
                <MdArrowBack/>
                <span className='' onClick={openhandler}> back</span>
            </div>
            <Courses courseData={courseQuery.data}/>
            </div>
    </div>
  )
}

export default Schoolhome