import React from 'react'
import Events from './Events'
import DatePicker from "react-datepicker";
import events from '../../data/events.json';
import "./events.css";


const EventsCalendar = () => {
  return (
   
    <div className="ec-container">
        <span className='heading'>calendar</span>
       <div className="cd-wrapper">
            <DatePicker  selectsRange
            inline/>
       </div>
       <div className="ev-wrapper">
        <span className="sub-heading"> top events</span>
        {
            events.map(data =>(
                <Events item={data} key={data.id}/>
            ))
        }    
       </div>
    </div>
  )
}

export default EventsCalendar