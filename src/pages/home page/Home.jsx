import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./home.css"
import Slider from '../../components/slider/Slider';


const Home = () => {
 
  return (
  <div className="home_container">
    <div className="slider-profile">
      <div className="slider_wrapper">
        <Slider/>
      </div>
      <div className="profile_wrapper">
        <div className="profile">
          <h4 className="title">my profile</h4>
          <div className="img">
            <img src="/pictures/babygirl.jpg" alt="profile" srcset="" />
          </div>
          <div className="content">
            <span>SCCI/00573/2020</span>
            <span>school of computing</span>
            <span>computer science</span>
          </div>
        </div>
        <div className="calendar">
          <span>calendar</span>
          <DatePicker
            selectsRange
            inline
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home