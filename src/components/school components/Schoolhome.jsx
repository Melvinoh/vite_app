import React from 'react'
import { FiDownload } from 'react-icons/fi'
import "./schoolhome.css"

const Schoolhome = () => {
  return (
    <>
        <div className="sh_wrapper">
            <div className="name">school of built enviroment</div>
            <div className="sh-profiles">
                <div className="img_wrapper">
                    <img src="/pictures/mbogi.jpg" alt="img" />
                </div>
                <div className="content">
                    <span>block :j</span>
                    <span>Director :prof salesio</span>
                    <span>Email :profsalesio@tukstaf.ac.ke</span>
                    <span>tel:+254768909345</span>
                </div>
            </div>
            <div className="sh-container 1">
                <div className="heading">
                    <span>courses</span>
                </div>
                <div className="sh-tab_container">
                    <div className="sh-tab_heading">
                        <span>btech courses</span>
                        <span>Diploma </span>
                        <span>Masters </span>
                    </div>
                    <div className="sh-tab_content">
                        <span className='item'>btech construction managment</span>
                        <span className='item'>btech real estate</span>
                        <span className='item'>btech architecture</span>
                        <span className='item'>btech urban planning</span>
                        <span className='item'>btech civil construction</span>
                    </div>
                </div>
            </div>
            <div className="sh-container 2">
                <div className="heading">
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
            <div className="sh-container 3">
                <div className="heading">
                    <span>leaders</span>
                </div>
                <div className="ld-card_container">
                    <div className="ld-card_wrapper">
                        <img src="/pictures/mrform.jpg" alt="img" />
                        <div className="content">
                            <span>congress man </span>
                            <span>+254 768 909 767 </span>
                            <span className='button'>view profile</span>
                        </div>
                    </div>
                    <div className="ld-card_wrapper">
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
    </>
  )
}

export default Schoolhome