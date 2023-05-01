import React from 'react'
import "./home.css"
import SliderWrapper from '../../components/slides/SliderWrapper'
const Home = () => {
  return (
  <div className="home_container">
    <div className="slider-profile">
      <div className="slider_wrapper">
        <SliderWrapper/>
      </div>
      <div className="profile_wrapper">
        <div className="profile">
          <h4 className="">my profile</h4>
          <div className="img">
            <img src="/pictures/babygirl.jpg" alt="profile" srcset="" />
          </div>
          <div className="content">
            <span>SCCI/00573/2020</span>
            <span>school of computing</span>
            <span>computer technology</span>
          </div>
        </div>
        <div className="calendar">
          <img src="/pictures/Capture7.PNG" alt="" srcset="" />
        </div>
      </div>
      

    </div>
  </div>
  )
}

export default Home