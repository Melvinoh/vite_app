import React from 'react'
import "./forms.css";
import {IoCloseCircleOutline} from 'react-icons/io5';

function Signup(props) {
  return (
    <div className={`form_modal ${props.isOpen ? "active" : "" }`}>
        <form action="" className="form">
            <IoCloseCircleOutline className='close_button' onClick={props.closefun}/>
            <span className="title">sign_up</span>
            <div className="form_components">
                <div className="form_elements">
                    <label htmlFor="username">first name</label>
                    <input type="text" name='fname' />
                </div>
                <div className="form_elements">
                    <label htmlFor="username">second name</label>
                    <input type="text" name='sname' />
                </div>
                <div className="form_elements">
                    <label htmlFor="username">username</label>
                    <input type="text" name='username' />
                </div>
                <div className="form_elements">
                    <label htmlFor="username">reg n.o</label>
                    <input type="text" name='regno' />
                </div>   
                <div className="form_elements">
                    <label htmlFor="username">email</label>
                    <input type="text" name='email' />
                </div>
                    
                <div className="form_elements">
                    <label htmlFor="username">password</label>
                    <input type="password" name='password' />
                </div>
            </div>
            <button>Register</button>
        </form>
    </div>
  )
}

export default Signup