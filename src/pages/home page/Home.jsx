import React from 'react'
import DatePicker from "react-datepicker";
import { TbBellRinging2Filled } from 'react-icons/tb'
import "react-datepicker/dist/react-datepicker.css";
import "./home.css"
import Slider from '../../components/slider/Slider';
import { Link } from 'react-router-dom';


const Home = () => {
 
  return (
  <div className="home_container ">
    <div className="slider-profile">
      <div className="slider_wrapper">
        <Slider/>
      </div>
      <div className="profile_wrapper">
        <div className="profile">
          <h3 className="heading">my profile</h3>
          <div className="prof-pic">
            <img src="/pictures/rasterman.jpg" alt="profile" srcset="" />
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
    <div className="notice_wrapper">
      <div className="elements">
        <h5 className="heading">notice board</h5>
      </div>
      <Link to="Notices" className="elements">
        <img src="/pictures/customercare.PNG" alt="" />
        <div className="text">
          <span>tuk admission notification</span>
          <TbBellRinging2Filled />
        </div>
      </Link>
      <Link  to="Notices" className="elements">
        <img src="/pictures/darling.jpg" alt="" />
        <div className="text">
         <span>clubs notification</span>
         <TbBellRinging2Filled />
        </div>
      </Link>
      <Link to="Notices" className="elements">
        <img src="/pictures/mrform.jpg" alt="" />
        <div className="text">
          <span> sports notification</span>
          <TbBellRinging2Filled />
        </div>
      </Link>
      <Link  to="Notices"className="elements">
        <img src="/pictures/mrform.jpg" alt="" />
        <div className="text">
          <span> sports notification</span>
          <TbBellRinging2Filled />
        </div>
      </Link>
    </div>
  </div>
  )
}

export default Home