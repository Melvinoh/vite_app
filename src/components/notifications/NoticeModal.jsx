import React from 'react'
import "./noticepage.css"
import {BsCheck2Circle} from "react-icons/bs"
import {AiOutlineSetting} from "react-icons/ai"


const NoticeModal = () => {
  return (
    <div className="notification-modal">
      <div className="note-wrapper">
        <div className="header">
          <span className="heading2">
            notifications
          </span>
          <div className="read">
            <BsCheck2Circle/>
            <span>mark all as read</span>
          </div>
        </div>
        <hr />
        <div className="note-tabs">
          <div className="tabs-wrap">
            <div className="n-tabs">
              <span>all</span>
              <span className='num'>9</span>
            </div>
            <div className="n-tabs">
              <span>admin</span>
              <span  className='num'> 3</span>
            </div>
            <div className="n-tabs">
              <span>clubs & sports</span>
              <span  className='num'>6</span>
            </div>
          </div>
          <AiOutlineSetting/>
        </div>
        <hr/>
        <div className="noticecard-wrapper">
          <div className="notice-card">
            <div className="img left">
              <img src="/pictures/JK1.jpg" alt="" />
            </div>
            <div className="ntc-right">
              <div className="ntc-top">
                <div className="right"> 
                  <p> <b>@melvinmuturi</b> commented on your post in </p>
                  <p> rotaract club </p>
                </div>
                <div className="left">
                  <p className='status'></p>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="ntc-bottom">
                <p>love the background on this. i would love to learn how you created the mesh garadient effect</p>
                <div className="buttons">
                  <span>decline</span>
                  <span>accept</span>
                </div>
              </div>
            </div>
          </div>
          <div className="notice-card">
            <div className="img left">
              <img src="/pictures/JK1.jpg" alt="" />
            </div>
            <div className="ntc-right">
              <div className="ntc-top">
                <div className="right"> 
                  <p> <b>@melvinmuturi</b> commented on your post in </p>
                  <p> rotaract club </p>
                </div>
                <div className="left">
                  <p className='status'></p>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="ntc-bottom">
                <p>love the background on this. i would love to learn how you created the mesh garadient effect</p>
                <div className="buttons">
                  <span>decline</span>
                  <span>accept</span>
                </div>
              </div>
            </div>
          </div>
          <div className="notice-card">
            <div className="img left">
              <img src="/pictures/JK1.jpg" alt="" />
            </div>
            <div className="ntc-right">
              <div className="ntc-top">
                <div className="right"> 
                  <p> <b>@melvinmuturi</b> commented on your post in </p>
                  <p> rotaract club </p>
                </div>
                <div className="left">
                  <p className='status'></p>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="ntc-bottom">
                <p>love the background on this. i would love to learn how you created the mesh garadient effect</p>
                <div className="buttons">
                  <span>decline</span>
                  <span>accept</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default NoticeModal