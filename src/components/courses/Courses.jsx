import React from 'react';
import "./cources.css";
import reps from "../../data/reps.json"
import Events from '../events /Events';
import events from '../../data/events.json'
import { json } from 'react-router-dom';

const Courses = ({courseData}) => {
    console.log(courseData)

    console.log(courseData?.classreps)
    if(courseData){
        var classreps = JSON.parse(courseData?.classreps)
    }
    console.log(classreps);
  return (
  <div className="course_container">
    <div className="header">
        <span className='heading2'>{courseData?.name}</span>
    </div>
    <div className="details">
    <img src={`/pictures/${courseData?.profile_pic}`} alt=""  />
        <span>department : biulding tech</span>
        <span>chairman : Dr robato </span>
        <span>email : drrobato@tuk kenya.ac.ke</span>
        <span>tel : +254 114 567 908</span>
    </div>  
    <div className="class_reps-container">
        <div className="heading3">
            <span>class representatives</span>
        </div>
        <div className="cr-wrapper grid">
            {reps.map( data => (
            <div className="ld-card_wrapper" key={data.id}>
                <div className="ld-card_container">
                    <img src="/pictures/mrform.jpg" alt="img" />
                    <div className="content">
                        <span>{data.name} </span>
                        <span>{data.tel}</span>
                        <span className='button'>{data.year}</span>
                    </div>
                </div>  
            </div>
            ))}
        </div>
     
    </div>
    <div className="ev-wrapper">
        <div className="heading3">
            <span>top events</span>
        </div>
        { events.map(data => (<Events item={data} key={data.id}/>))}
    </div>
  </div>
  )
}

export default Courses