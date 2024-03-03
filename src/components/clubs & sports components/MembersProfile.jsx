import React from 'react'
import "./singlepages.css"
const MembersProfile = () => {
  return (
    <div className="mp_wrapper">
        <div className="myclubprofile">
            <p>club profile</p>
            <div className="mp-header">
                <div className="profile_pic">
                    <img src="/pictures/mbogi.jpg" alt="" />
                </div>
                <div className="details">
                    <p>chess club</p>
                    <p>block j</p>
                    <p className="desc">
                        Lorem ipsum dolor  exercitationem!
                    </p>
                    <p>940 members</p>
                </div>
            </div>
            <hr className='hr'/>
            <div className="admins members">
                <span>admin & moderators</span>
                <div className="admin_wrapper">
                    <div className="ad-profile">
                        <img src="/pictures/darling.jpg" alt="" />
                        <div className="det">
                            <div className='con'>
                                <span>melissa wambui</span>
                                <span>+254 756 314 369</span>
                                <span>chair person</span>
                            </div>
                            <span className='btn2'> view profile</span>
                        </div>
                    </div>
                   
                    <div className="ad-profile">
                        <img src="/pictures/smilygirl.jpg" alt="" />
                        <div className="det">
                            <div className='con'>
                                <span>melissa wambui</span>
                                <span>+254 756 314 369</span>
                                <span>secretary</span>
                            </div>
                            <span className='btn2'>  view profile</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='hr'/>
            <div className="members">
                <span>other members</span>
                <div className="admin_wrapper">
                    <div className="ad-profile">
                        <img src="/pictures/homespic.jpg" alt="" />
                        <div className="det">
                            <div className='con'>
                                <span>melissa wambui</span>
                                <span>ule boy mother hukuwon againist the street disciples</span>
                                
                            </div>
                            <span  className='btn2'> view profile</span>
                        </div>
                    </div>
                    <div className="ad-profile">
                        <img src="/pictures/homespic.jpg" alt="" />
                        <div className="det">
                            <div className='con'>
                                <span>melissa wambui</span>
                                <span>ule boy mother hukuwon againist the street disciples</span>
                            </div>
                            <span  className='btn2'> view profile</span>
                        </div>
                    </div>
                    <div className="ad-profile">
                        <img src="/pictures/rasterman.jpg" alt="" />
                        <div className="det">
                            <div className='con'>
                                <span>melissa wambui</span>
                                <span>father worrir aka the street disciple ule boy mother hukuworn againist</span>
                               
                            </div>
                            <button>view profile</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MembersProfile
