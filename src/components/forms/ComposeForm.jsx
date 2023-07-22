import React, { useState } from 'react'
import {IoIosClose} from 'react-icons/io'
import "./forms.css"


const ComposeForm = ({close, isOpen}) => {
  return (
    <div className={`form_modal ${isOpen ? "active" : "" }`}>
        <div className="compose">
            < IoIosClose className='icons' onClick={close}/>
            <div className="c-heading">
                <div  className='tt'>
                    <span className='heading2'> posting to: rotaract club</span>
                </div>
                <img src="/pictures/content.jpg" alt="img" />
            </div>
            <div className="c-form">
                <form action="c-form1">
                    <input type="hidden" name="" value="muturi melvin"/>
                    <input type="hidden" name="" value="reg number"/>
                    <input type="hidden" name="" value="reg number"/>
                    <div className="c-in">
                        <label for="image"> image :</label>
                        <input type="file"  name="image"/>
                    </div>
                    <div className="img-preview">
                        <img src="/pictures/babygirl.jpg" alt="" />
                    </div>
                    <div className="c-in">
                        <label for="heading"> heading :</label>
                        <input type="text"  name="image"/>
                    </div>
                
                    <div className="c-in">
                        <label for="image">message :</label>
                        <textarea name="message" rows="15 " columns="30"  placeholder='your text'/>
                    </div>
                    <div className='btn'> <span>publish</span></div>
                </form>
            </div>
        </div>
    </div>
   
  )
}

export default ComposeForm