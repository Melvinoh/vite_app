import React from 'react'
import "./forms.css";
import {IoCloseCircleOutline} from 'react-icons/io5';

function Login(props) {
  return (
    <div className={`form_modal ${props.isOpen ? "active" : "" }`}>
        <form action="" className="form">
            <IoCloseCircleOutline className='close_button' onClick={props.closefun}/>
            <span className="title"> login</span>
            <div className="form_components">
                <div className="form_elements">
                    <label htmlFor="username">username</label>
                    <input type="text" name='username' />
                </div>
                <div className="form_elements">
                    <label htmlFor="username">reg n.o</label>
                    <input type="text" name='reg_n.o' />
                </div>   
                <div className="form_elements">
                    <label htmlFor="username">password</label>
                    <input type="password" name='password' />
                </div>
            </div>
            <button>login</button>
        </form>
    </div>
  )
}

export default Login