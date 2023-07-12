import React from 'react'
import { useState, useContext} from 'react';
import "./forms.css";
import {IoCloseCircleOutline} from 'react-icons/io5';
import { authContext, useAuthContext } from '../../context/AuthenticationContext';

function Login(props) {

    const{LoginSubmit} = useState(authContext);

   
    const [Error, setError] = useState(null)
    const [LoginInputs, setLoginInputs] = useState({
        regno:"",
        password:"",
    })
    const handleChange = (e) =>{
        setLoginInputs((prev) => ({...prev, [e.target.name]:e.target.value }))
    }
    
    const handleSubmit = async (e) =>{
      try {
        e.preventDefault();
        await LoginSubmit(LoginInputs)
      } catch (err) {
        setError(err);
      }
    }
   
  return (
    <div className={`form_modal ${props.isOpen ? "active" : "" }`}>
        <form action="" className="form">
            <IoCloseCircleOutline className='close_button' onClick={props.closefun}/>
            <span className="title"> login</span>
            <div className="form_components">
                <div className="form_elements">
                    <label htmlFor="regno">username</label>
                    <input type="text" name='username' onChange={handleChange}/>
                </div>   
                <div className="form_elements">
                    <label htmlFor="password">password</label>
                    <input type="password" name='password'onChange={handleChange} />
                </div>
                {Error && Error}
            </div>
            <button onClick={handleSubmit}>login</button>
        </form>
    </div>
  )
}

export default Login