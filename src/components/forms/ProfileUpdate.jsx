import React, { useState } from 'react'
import {AiFillCamera} from "react-icons/ai"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./forms.css"

const ProfileUpdate = () => {
  const [value, setValue] = useState('');

  return (
    <div className="prof-upt_wrapper">
      <h1 className="heading1">profile update</h1>
      <div className="cover-pic">
        <img src="/pictures/mbogi.jpg" alt="" />
        <div className="camicon">
          <AiFillCamera/>
          <span>change cover</span>
        </div>
        
      </div>
      <div className="prof-upt_form">
        <div className="right-form">
          <h2 className="heading2">personal info</h2>
          <div className="updateForm-wrapper">
            <div className="img">
              <img src="/pictures/coolboy.jpg" alt="" />
              <div className="iconic">
               <AiFillCamera />
              </div>
            </div>
            <div className="form-inputs-wrapper">
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="fname">first name</label>
                  <input type="text" value="muturi" />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="sname">second name</label>
                  <input type="text" value="melvin" />
                </div>
              </div>
              <div className="inputs-upt">
                <label htmlFor="email">email</label>
                <input type="text" value="muturimelvin@gmail.com" />
              </div>
              <div className="inputs-upt">
                <label htmlFor="phone">contacts number</label>
                <input type="text" value="+254 728318369" />
              </div>
              <div className="inputs-upt">
                <label htmlFor="address">address</label>
                <input type="text" value="930-10100 nyeri" />
              </div>
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="city">city</label>
                  <input type="text" value="nairobi" />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="state">state</label>
                  <input type="text" value="madaraka" />
                </div>
              </div>
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="city">next of king</label>
                  <input type="text" value="john kelvin" />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="id">id number</label>
                  <input type="text" value="38760186" />
                </div>
              </div>
              <div className="inputs-upt">
                  <label htmlFor="id">password</label>
                  <input type="password" value="38760186" />
              </div>
              <button>save changes</button>
            </div>
          </div>
        </div>
        <div className="left-form">
          <h2 className="heading2">profile info</h2>
          <div className="prof-inf-wrapper">
            <div className="inputs-wrap">
              <div className="inputs-upt">
                <label htmlFor="username">username</label>
                <input type="text" value="melvinoh" />
              </div>
              <div className="inputs-upt">
                <label htmlFor="id">portfolio url</label>
                <input type="text" value="https://melvinoh.co.ke" />
              </div>
            </div>
            <div className="inputs-upt">
              <label htmlFor="id">bio</label>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
            <div className="socila-upt">
              <h2 className='heading2'>social hundles</h2>
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="username">facebook</label>
                  <input type="text" value="melvinoh" />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="id">twiter</label>
                  <input type="text" value="https://melvinoh.co.ke" />
                </div>
              </div>
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="username">linkedIn</label>
                  <input type="text" value="melvinoh" />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="id">Instagram</label>
                  <input type="text" value="https://melvinoh.co.ke" />
                </div>
              </div>
              <div className="inputs-upt">
                <label htmlFor="id">github</label>
                <input type="text" value="https://melvinoh.co.ke" />
              </div>
            </div>
          </div>
          <div className="skill-upt">
            <h2 className="heading2">
              my skills update
            </h2>
            <div className="inputs-upt">
                <label htmlFor="id">skills</label>
                <input type="text" value="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUpdate