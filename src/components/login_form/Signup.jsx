import React from 'react'
import "./login.css";
import {IoCloseCircleOutline} from 'react-icons/io5';

function Signup(props) {
  return (
    <div className={`sign_up ${props.isOpen ? "active" : "" }`}>
        <form action="" className="form">
            <IoCloseCircleOutline className='close_button' onClick={props.closefun}/>
            <span className="title">sign_up</span>
            <div className="login_form">
                <div className="form_elements">
                    <label htmlFor="username">username</label>
                    <input type="text" name='username' />
                </div>
                <div className="form_elements">
                    <label htmlFor="username">reg n.o</label>
                    <input type="text" name='reg_n.o' />
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