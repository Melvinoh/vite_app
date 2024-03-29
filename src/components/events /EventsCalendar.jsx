import React from 'react'
import Events from './Events'
import DatePicker from "react-datepicker";
import events from '../../data/events.json';
import "./events.css";


const EventsCalendar = () => {
  return (
   
    <div className="ec-container">
       <div className="cd-wrapper">
            <span className='heading3'>calendar</span>
            <DatePicker  selectsRange
            inline/>
       </div>
       <div className="ev-wrapper">
        <span className="heading3"> top events</span>
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