import React from 'react'
import { useState, useContext, } from 'react';
import "./forms.css";
import {IoCloseCircleOutline} from 'react-icons/io5';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function Login({isOpen,closefun}) {
  const {loginForm, currentUser, Error} = useContext(AuthContext);

 
 
  const navigate = useNavigate()
  const [Inputs, setInputs] = useState({
    username: "",
    password:""
  })
  const handlechange = (e) =>{
   
    setInputs( (prev) => ({...prev, [e.target.name]:e.target.value}) )
    
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
     await loginForm(Inputs)
  
     navigate("/")
     closefun()
   
  }
  
  return (
    <div className={`form_modal ${isOpen ? "active" : "" }`}>
        <form action="" className="form">
            <IoCloseCircleOutline className='close_button' onClick={closefun}/>
            <span className="title"> login</span>
            <div className="form_components">
                <div className="form_elements">
                    <label htmlFor="regno">username</label>
                    <input type="text" name='username' onChange={handlechange}/>
                </div>   
                <div className="form_elements">
                    <label htmlFor="password">password</label>
                    <input type="password" name='password'onChange={handlechange} />
                </div>
                {Error && Error}
            </div>
            <button onClick={handleSubmit}>login</button>
        </form>
    </div>
  )
}
export default Login