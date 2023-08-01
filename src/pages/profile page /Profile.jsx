import React, { useState } from 'react'
import "./profile.css"
import {BsThreeDotsVertical,BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsGithub} from "react-icons/bs"
import ProfileUpdate from '../../components/forms/ProfileUpdate'
const Profile = () => {
    const [updateClick, setUpdateClick] = useState(false)
    const handleclick = () =>{
        setUpdateClick(!updateClick)
    }
    if (updateClick) return <ProfileUpdate click={handleclick}/>

  return (
    <div className="p-wrapper">
        <h2 className='heading1'> profile</h2>
        <div className="p-container">
            <div className="right">
                <div className="profile-header">
                    <div className="cover-pic">
                        <div className="cover">
                            <img src="/pictures/rotaract.jpg" alt="" />
                        </div>
                        <div className="p-pic">
                            <img src="/pictures/JK1.jpg" alt="" />

                        </div>
                    </div>
                    <div className="ph-content">
                        <h2 className='heading2'> amanda smith</h2>
                        <div className="prof-details">
                            <div className="sh-det">
                                <span>Regno: SCCI/00573/2020</span>
                                <span>school: school of computing and information technology </span>
                                <span>course :computer technology</span>
                            </div>
                            <div className="social">
                                <span>email : melvinmurichu@gmail.com</span>
                                <div className="ICON">
                                    <a href=""><BsFacebook/></a>
                                    <a href=""><BsTwitter/></a>
                                    <a href=""><BsInstagram/> </a>
                                    <a href=""><BsLinkedin/> </a>
                                    <a href=""><BsGithub/></a>
                                </div>
                                <p>phone: +254 728318369</p>
                            </div>
                        </div>      
                    </div>
                    <div className="contacts">
                        <span>resume : melvinmurichu@gmail.com</span>
                        <button onClick={handleclick}>update</button>
                        
                    </div>
                </div>
                <div className="myskills">
                    <h2 className="heading3">my skills</h2>
                    <div className="skills">
                        <span>UX/UI Design</span>
                        <span>fullstack development</span>
                        <span>cybersecurity</span>
                        <span>cloud computing</span>
                        <span>cybersecurity</span>
                        <span>cloud computing</span>
                        <span>cybersecurity</span>   
                    </div>  
                </div>
                <div className="myportfolio">
                    <h2 className='heading3'>my portfolio</h2>
                    <div className="portfolio">
                        <span>github: link</span>
                        <span>resume : </span>
                    </div>
                    
                </div>
            </div>
          <div className="left">
            <div className="myclubs">
                <h2 className='heading3'>  my clubs </h2>
                <div className="myclubs-wrapper">
                    <div className="myclubs-content">
                        <div className="img">
                            <img src="/pictures/mbogi.jpg" alt="" />
                        </div>
                        <div className="details">
                            <p className='heading'> rotaract club</p>
                            <p className='heading'> 400k + members </p>
                        </div>
                        <BsThreeDotsVertical/>
                    </div>
                    <div className="myclubs-content">
                        <div className="img">
                            <img src="/pictures/mbogi.jpg" alt="" />
                        </div>
                        <div className="details">
                            <p className='heading'> rotaract club</p>
                            <p className='heading'> 400k + members </p>
                        </div>
                        <BsThreeDotsVertical/>
                    </div>
                    <div className="myclubs-content">
                        <div className="img">
                            <img src="/pictures/mbogi.jpg" alt="" />
                        </div>
                        <div className="details">
                            <p className='heading'> rotaract club</p>
                            <p className='heading'> 400k + members </p>
                        </div>
                        <BsThreeDotsVertical/>

                    </div>
                 
                </div>
            </div>
            <div className="myclubs">
                <h2  className='heading3'> my sports </h2>
                <div className="myclubs-wrapper">
                    <div className="myclubs-content">
                        <div className="img">
                            <img src="/pictures/mbogi.jpg" alt="" />
                        </div>
                        <div className="details">
                            <p className='heading'> rotaract club</p>
                            <p className='heading'> 400k + members </p>
                        </div>
                        <BsThreeDotsVertical/>
                    </div>
                    <div className="myclubs-content">
                        <div className="img">
                            <img src="/pictures/mbogi.jpg" alt="" />
                        </div>
                        <div className="details">
                            <p className='heading'> rotaract club</p>
                            <p className='heading'> 400k + members </p>
                        </div>
                        <BsThreeDotsVertical/>
                    </div>
                    <div className="myclubs-content">
                        <div className="img">
                            <img src="/pictures/mbogi.jpg" alt="" />
                        </div>
                        <div className="details">
                            <p className='heading'> rotaract club</p>
                            <p className='heading'> 400k + members </p>
                        </div>
                        <BsThreeDotsVertical/>

                    </div>
                 
                </div>
            </div>
            <div className="myclubs">
                <h2 className='heading3'> my communities</h2>
                <div className="myclubs-wrapper">
                    <div className="myclubs-content">
                        <div className="img">
                            <img src="/pictures/mbogi.jpg" alt="" />
                        </div>
                        <div className="details">
                            <p className='heading'> rotaract club</p>
                            <p className='heading'> 400k + members </p>
                        </div>
                        <BsThreeDotsVertical/>
                    </div>
                    <div className="myclubs-content">
                        <div className="img">
                            <img src="/pictures/mbogi.jpg" alt="" />
                        </div>
                        <div className="details">
                            <p className='heading'> rotaract club</p>
                            <p className='heading'> 400k + members </p>
                        </div>
                        <BsThreeDotsVertical/>
                    </div>
                    <div className="myclubs-content">
                        <div className="img">
                            <img src="/pictures/mbogi.jpg" alt="" />
                        </div>
                        <div className="details">
                            <p className='heading'> rotaract club</p>
                            <p className='heading'> 400k + members </p>
                        </div>
                        <BsThreeDotsVertical/>
                    </div>
                </div>
            </div>

          </div>
        </div>
    </div>

  )
}

export default Profile