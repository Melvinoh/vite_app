import React, { useState } from 'react'
import {IoIosClose} from 'react-icons/io'
import "./forms.css"


const ComposeForm = ({close, isOpen, items, id}) => {
  return (
    <div className={`form_modal ${isOpen ? "active" : "" }`}>
        <div className="compose">
            < IoIosClose className='icons' onClick={close}/>
            <div className="c-heading">
                <div  className='tt'>
                    <span className='heading2'> posting to:  {items.name}</span>
                </div>
                <img src={`/pictures/${items.profile_pic}`} alt=""/> 
            </div>
            <div className="c-form">
                <form action="c-form1">
                    <input type="hidden" name="clubID" value={id}/>
                    <div className="c-in">
                        <label for="image"> image :</label>
                        <input type="file"  name="image"/>
                    </div>
                    <div className="img-preview">
                        <img src={`/pictures/${items.profile_pic}`} alt=""/>
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