import React, { useContext, useState} from 'react'
import {AiFillCamera} from "react-icons/ai"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./forms.css"
import {MdArrowBack} from "react-icons/md"
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../../axios';
import { useMutation, useQueryClient } from '@tanstack/react-query'



const ProfileUpdate = ({click,data}) => {

  const { currentUser} = useContext(AuthContext);
  
  const [cover, setCover] = useState(null)
  const [profile, setProfile] = useState(null)
  const [value, setValue] = useState('');
  const [Formdata, setFormdata] = useState(
    {
      fname:`${data.fname}`,
      sname:`${data.sname}`,
      email:`${data.email}`,
      tel:`${data.phone}`,
      zip:`${data.zip_code}`,
      city:`${data.county}`,
      state:`${data.city}`,
      username:`${data.username}`,
      NOK:`${data.next_of_king}`,
      Id_no: `${data.id_no}`,
      portfolio: `${data.portfolio_url}`,
      bio: `${data.bio}`,
    }
  )
  const uploadFile = async (file) =>{
    try {
        const formData = new FormData()
        formData.append("file", file)
        const res = await makeRequest.post("/uploadFile/upload",formData)
        return res.data
    } catch (error) {
        console.log(error)
    }
  }
  const queryClient = useQueryClient()  
  const mutation = useMutation( 
      async (userinfo) =>{
          return  await makeRequest.put("/profile/updateProfile",userinfo)
      },
      {
          onSuccess: () => {
          queryClient.invalidateQueries(['profile'])
      },
 });
  const handleSubmit= async (e) =>{
      e.preventDefault()
      let coverurl;
      let profileurl;
            
      coverurl =  cover ? await uploadFile(cover) :  data.cover_photo;
      profileurl = profile ? await uploadFile(profile) : data.profile_pic;
      
      mutation.mutate({...Formdata, coverPic:coverurl, profilePic:profileurl })
      setCover(null);
      setProfile(null);
      click();
  }
  const handleChange = (e)=>{
    setFormdata((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  return (
    <div className="prof-upt_wrapper">
      <div className="back">
        <MdArrowBack/>
        <span className='' onClick={click}> back</span>
      </div>
      <h1 className="heading1">profile update</h1>
      <div className="cover-pic">
        {
          cover ? <img src={URL.createObjectURL(cover)} alt=""/> 
          : <img src={`/upload/${data.cover_photo}`} alt="" name='cover_photo'/>
        }
        <div className="camicon">
          <label htmlFor="file-input" >
            <AiFillCamera/>
            <span>change cover</span>
          </label>
          <input type="file" id='file-input' name='cover_photo'  onChange={(e) =>setCover(e.target.files[0])}/>
        </div>
        
      </div>
      <div className="prof-upt_form">
        <div className="right-form">
          <h2 className="heading2">personal info</h2>
          <div className="updateForm-wrapper">
            <div className="img">
              {
                profile ? <img src={URL.createObjectURL(profile)} alt=""/> 
                : <img src={`/upload/${data.profile_pic}`} alt="" name='profile_pic'/>
              }
              <div className="iconic">
                <label htmlFor="file-input1">
                  <AiFillCamera/>
                </label>
                <input type="file" id='file-input1' name='profile_pic'  onChange={(e) =>setProfile(e.target.files[0])}/>
              </div>
            </div>
            <div className="form-inputs-wrapper">
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="fname">first name</label>
                  <input type="text" value={Formdata.fname} name='fname' onChange={handleChange} />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="sname">second name</label>
                  <input type="text" value={Formdata.sname} name='sname' onChange={handleChange}/>
                </div>
              </div>
              <div className="inputs-upt">
                <label htmlFor="email">email</label>
                <input type="text" value={Formdata.email} name='email' onChange={handleChange}/>
              </div>
              <div className="inputs-upt">
                <label htmlFor="phone">contacts number</label>
                <input type="text"defaultValue="+254 728318369" name='tel'/>
              </div>
              <div className="inputs-upt">
                <label htmlFor="address">address</label>
                <input type="text" name='zip' value={Formdata.zip} onChange={handleChange}/>
              </div>
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="city">city</label>
                  <input type="text" value={Formdata.city} name='city' onChange={handleChange} />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="state">state</label>
                  <input type="text" name='state' value={Formdata.state} onChange={handleChange}/>
                </div>
              </div>
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="city">next of king</label>
                  <input type="text" name='NOK' value={Formdata.NOK} onChange={handleChange} />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="id">id number</label>
                  <input type="text" name='Id_no'value={Formdata.Id_no} onChange={handleChange}/>
                </div>
              </div>
              <div className="inputs-upt">
                  <label htmlFor="id">password</label>
                  <input type="password"defaultValue="38760186" name='password'/>
              </div>
  
            </div>
          </div>
        </div>
        <div className="left-form">
          <h2 className="heading2">profile info</h2>
          <div className="prof-inf-wrapper">
            <div className="inputs-wrap">
              <div className="inputs-upt">
                <label htmlFor="username">username</label>
                <input type="text" name='username'value={Formdata.username} onChange={handleChange} />
              </div>
              <div className="inputs-upt">
                <label htmlFor="id">portfolio url</label>
                <input type="text"name='portfolio' value={Formdata.portfolio} onChange={handleChange}/>
              </div>
            </div>
           <div className="bio">
              <div className="inputs-upt">
                <label htmlFor="id">bio</label>
                <ReactQuill theme="snow" name='bio' onChange={handleChange}/>
              </div>
           </div>
            <div className="social-upt">
              <h2 className='heading2'>social hundles</h2>
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="username">facebook</label>
                  <input type="url" defaultValue="https://melvinoh.co.ke" />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="id">twiter</label>
                  <input type="url" defaultValue="https://melvinoh.co.ke" />
                </div>
              </div>
              <div className="inputs-wrap">
                <div className="inputs-upt">
                  <label htmlFor="username">linkedIn</label>
                  <input type="url" defaultValue="https://melvinoh.co.ke" />
                </div>
                <div className="inputs-upt">
                  <label htmlFor="id">Instagram</label>
                  <input type="url" defaultValue="https://melvinoh.co.ke" />
                </div>
              </div>
              <div className="inputs-upt">
                <label htmlFor="id">github</label>
                <input type="text" defaultValue="https://melvinoh.co.ke" />
              </div>
            </div>
          </div>
          <div className="skill-upt">
            <h2 className="heading2">
              my skills update
            </h2>
            <div className="inputs-upt">
                <label htmlFor="id">skills</label>
                <input type="text" defaultValue="" />
            </div>
          </div>
          <button onClick={handleSubmit}>save changes</button>
        </div>
      </div>
    </div>
  )
}

 export default ProfileUpdate