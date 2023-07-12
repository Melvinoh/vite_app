import React from 'react'
import "./forms.css";
import {IoCloseCircleOutline} from 'react-icons/io5';
import { useState } from 'react';
import axios from "axios"


function Signup(props) {
    const [Error, setError] = useState(null)
    const [Inputs, setInputs] = useState({
        regno:"",
        fname:"",
        sname:"",
        email:"",
        password:"",
        username:"",
    })
    const handlechange = (e ) =>{
        setInputs( (prev) => ({...prev, [e.target.name]:e.target.value}))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/auth/signUp", Inputs)
        } catch (err) {
            setError(err.response.data)
        }
    }
    
  return (
    <div className={`form_modal ${props.isOpen ? "active" : "" }`}>
        <form action="" className="form">
            <IoCloseCircleOutline className='close_button' onClick={props.closefun}/>
            <span className="title">sign_up</span>
            <div className="form_components">
                <div className="form_elements">
                    <label htmlFor="username">reg n.o</label>
                    <input type="text" name='regno' onChange={handlechange} />
                </div>  
                <div className="form_elements">
                    <label htmlFor="username">first name</label>
                    <input type="text" name='fname' onChange={handlechange}  />
                </div>
                <div className="form_elements">
                    <label htmlFor="username">second name</label>
                    <input type="text" name='sname' onChange={handlechange} />
                </div>
                <div className="form_elements">
                    <label htmlFor="username">email</label>
                    <input type="text" name='email' onChange={handlechange} />
                </div>
                <div className="form_elements">
                    <label htmlFor="username">username</label>
                    <input type="text" name='username' onChange={handlechange}  />
                </div>
                <div className="form_elements">
                    <label htmlFor="username">password</label>
                    <input type="password" name='password' onChange={handlechange} />
                </div>
            </div>
            {Error && Error}
            <button onClick={handleSubmit}>Register</button>
        </form>
    </div>
  )
}

export default Signup