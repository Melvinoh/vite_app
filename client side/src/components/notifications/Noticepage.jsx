import React from 'react'
import "./noticepage.css"
import { MdSportsBaseball } from 'react-icons/md'
import { BsArrowLeftCircleFill } from 'react-icons/bs'


const Noticepage = () => {
  return (
    <div className="notice-container">
        <div className="n-overlay_wrapper">
            <div className="n-img">
                <img src="/pictures/customercare.PNG" alt="img" />
            </div>
            <div className="n-overlay">
                <span><BsArrowLeftCircleFill/></span>
                <span>sports notifications</span>
            </div>
        </div>
        <div className="n-pane">
            <div className="heading"><span>sports panel</span></div>
            <div className="n-content_container">
                <div> <MdSportsBaseball className='icon'/></div>
                <div className="content-wrap">
                    <span>rugby 7s</span>
                    <span className='i'>500+ members</span>
                </div>
                <span className="nstatus">
                    registration ongoing
                </span>
            </div>
            <div className="n-content_container">
                <div> <MdSportsBaseball className='icon'/></div>
                <div className="content-wrap">
                    <span>rugby 7s</span>
                    <span className='i'>500+ members</span>
                </div>
                <span className="nstatus">
                    registration ongoing
                </span>
            </div>
            <div className="n-content_container">
                <div> <MdSportsBaseball className='icon'/></div>
                <div className="content-wrap">
                    <span>rugby 7s</span>
                    <span className='i'>500+ members</span>
                </div>
                <span className="nstatus">
                    registration ongoing
                </span>
            </div>
            <div className="n-content_container">
                <div> <MdSportsBaseball className='icon'/></div>
                <div className="content-wrap">
                    <span>rugby 7s</span>
                    <span className='i'>500+ members</span>
                </div>
                <span className="nstatus">
                    registration ongoing
                </span>
            </div>
        </div>


    </div>
  )
}

export default Noticepage