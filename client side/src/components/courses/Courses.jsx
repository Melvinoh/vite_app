import React from 'react';
import "./cources.css";
import reps from "../../data/reps.json"
import Events from '../events /Events';
import events from '../../data/events.json'

const Courses = () => {
  return (
  <div className="course_container">
    <div className="header">
        <span className='sub-heading'>btech construction managemrnt</span>
    </div>
    <div className="details">
        <span>department : biulding tech</span>
        <span>chairman : Dr robato </span>
        <span>email : drrobato@tuk kenya.ac.ke</span>
        <span>tel : +254 114 567 908</span>
    </div>  
    <div className="class_reps-container">
        <div className="heading">
            <span>class representatives</span>
        </div>
        <div className="cr-wrapper">
            {reps.map( data => (
            <div className="ld-card_container" key={data.id}>
                <div className="ld-card_wrapper">
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
    <div className="event-wrapper">
        <div className="sub-heading">
            <span>top events</span>
        </div>
        { events.map(data => (<Events item={data} key={data.id}/>))}
    </div>
  </div>
  )
}

export default Courses