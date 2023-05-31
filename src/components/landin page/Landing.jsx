import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import "./Landing.css"


const Landing = ({openformfun}) => {
  return (
    <div className="landing-container">
        <img src="/pictures/content.jpg" alt="img"/>
        <div className="hero-section">
            <div className="l-heading">
                <div className="logo1">
                    <div className='left'><img src="/pictures/tuklogo.JPG" alt="" /></div>
                    <div className='right'>
                        <h4>SATUK</h4>
                        <span className=""> student association of tuk</span>
                    </div>
                </div>
                <div className="home-btn" onClick={openformfun}>
                    <span>home</span>
                    <AiOutlineArrowRight/>
                </div>
            </div>
            <div className="lcontent">
                <h1>SATUK WHERE THE FUTURE OF THE STUDENTS LIES  </h1>
                <p>
                    A design concept is what you need when time crunch doesn't allow for a complete process.
                    This is where Conceptzilla comes in handy. We design up to four main screens of your product, 
                    ready for public display.Fixed price. One week. 
                </p>
                <div className="l-btn">
                    <span onClick={openformfun}>login</span>
                    <span onClick={openformfun}>signup</span>
                </div>
            </div>
           
            <div className="student-reviews">

            </div>
        </div>
        {/* <div className="about">
            <div className="content">
                <h4>everything at your reach</h4>
                <p>
                    A design concept is what you need when time crunch doesn't allow for a complete process.
                    This is where Conceptzilla comes in handy. We design up to four main screens of your product, 
                    ready for public display.Fixed price. One week. 
                </p>
           </div>
           <img src="/pictures/homespic.jpg" alt="" />
        </div> */}

    </div>
  )
}

export default Landing