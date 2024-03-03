import React from 'react'
import {BsSearch,BsThreeDotsVertical,BsFillPlusSquareFill,BsFillSendFill} from 'react-icons/bs';
import {RxCaretDown} from 'react-icons/rx';
import InputEmoji from 'react-input-emoji'
import "./singlepages.css"


const Messanger = () => {
  return (
   <div className="messager-wrapper">
        <div className="messager-header">
            <div className="img">
                <img src="/pictures/coolboy.jpg" alt="" />
            </div>
            <div className="head-content">
                <div className="name">
                    <p>alfie</p>
                    <p>online</p>
                </div>
               
                    <BsSearch className='icon'/>
                    <BsThreeDotsVertical className='icon'/>
                
            </div>  
        </div>
        <div className="messagebody">
            <div className="message">
                <img src="/pictures/rasterman.jpg" alt="" />
                <div className="txt-wrapper">
                    <RxCaretDown className='caret'/>
                    <div className="textref">
                        <p>alfie</p>
                        <p>i can explain</p>
                    </div>
                    <img src="/pictures/rotaract.jpg" alt="" />
                    <div className="text">
                        <p>haya kwani zimeshiko hio design</p>
                    </div>
                </div>
            </div>
            <div className="message owner">
                <img src="/pictures/babygirl.jpg" alt="" />
                <div className="txt-wrapper own">
                    <div className="textref ownw2">
                        <p>queen</p>
                        <p>i can explain</p>
                    </div>
                    <div className="text">
                        <p>haya kwani zimeshiko hio design</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="message-footer">
            <BsFillPlusSquareFill className='icons'/>
            <InputEmoji/>
            <BsFillSendFill className='icons'/>
        </div>
    </div>
  )
}

export default Messanger