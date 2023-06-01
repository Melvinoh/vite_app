import React from 'react'
import { Link } from 'react-router-dom'
import "./myclubs.css"

const Myclubs = () => {
  return (
    <div className='clu'>
        <div className="clu-container">
            <span className='title'> my clubs</span>
            <div className="cl-box">
                <Link  to={"2" }className="clu-wrapper link">
                    <div className="c-pic">
                        <img src="/pictures/content.jpg" alt="" />
                    </div>
                    <div className="c-content">
                        <h6>rotaract</h6>
                        <span>block j</span>
                        <span>room 23</span>
                    </div>
                </Link>
                <Link to={"2"} className="clu-wrapper link">
                    <div className="c-pic">
                        <img src="/pictures/rasterman.jpg" alt="" />
                    </div>
                    <div className="c-content">
                        <h6>rotaract</h6>
                        <span>block j</span>
                        <span>room 23</span>
                    </div>
                </Link>
                <Link className="clu-wrapper">
                    <div className="c-pic">
                        <img src="/pictures/babygirl.jpg" alt="" />
                    </div>
                    <div className="c-content">
                        <h6>rotaract</h6>
                        <span>block j</span>
                        <span>room 23</span>
                    </div>
                </Link>
                <div className="clu-wrapper">
                    <div className="c-pic">
                        <img src="/pictures/mbogi.jpg" alt="" />
                    </div>
                    <div className="c-content">
                        <h6>rotaract</h6>
                        <span>block j</span>
                        <span>room 23</span>
                    </div>
                </div>
                <div className="clu-wrapper">
                    <div className="c-pic">
                        <img src="/pictures/mrform.jpg" alt="" />
                    </div>
                    <div className="c-content">
                        <h6>rotaract</h6>
                        <span>block j</span>
                        <span>room 23</span>
                    </div>
                </div>
                <div className="clu-wrapper">
                    <div className="c-pic">
                        <img src="/pictures/rotaract.jpg" alt="" />
                    </div>
                    <div className="c-content">
                        <h6>rotaract</h6>
                        <span>block j</span>
                        <span>room 23</span>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="ft-box">
            <div className="ft">
                <span className='title'>featured clubs</span>
            </div>
            <div className="ft-wrapper">
                <div className="ft-clubs">
                    <div className="ft-pic">
                        <img src="/pictures/developer.jpg" alt="" />
                    </div>
                    <div className="ft-content">
                        <h6>drama club</h6>
                        <p>
                            the quick brown fox jumped over the lazy dog 
                            na hili penzi la ukweli baby nipe tu na ukinikumbatia moyo unadunda pu pu
                            puuu
                        </p>
                        <div>
                            <h6>block j</h6>
                            <h6>room 31</h6>
                        </div>
                    </div>
                </div>
                <div className="ft-clubs">
                    <div className="ft-pic">
                        <img src="/pictures/darling.jpg" alt="" />
                    </div>
                    <div className="ft-content">
                        <h6>drama club</h6>
                        <p>
                            the quick brown fox jumped over the lazy dog 
                            na hili penzi la ukweli baby nipe tu na
                            puuu
                        </p>
                        <div>
                            <h6>block j</h6>
                            <h6>room 31</h6>
                        </div>
                    </div>
                </div>
                <div className="ft-clubs">
                    <div className="ft-pic">
                        <img src="/pictures/smilygirl.jpg" alt="" />
                    </div>
                    <div className="ft-content">
                        <h6>drama club</h6>
                        <p>
                            the quick brown fox jumped over the lazy dog 
                            na hili penzi la ukweli baby nipe tu na ukinikumbatia 
                            puuu
                        </p>
                        <div>
                            <h6>block j</h6>
                            <h6>room 31</h6>
                        </div>
                    </div>
                </div>
                <div className="ft-clubs">
                    <div className="ft-pic">
                        <img src="/pictures/student 1.jpg" alt="" />
                    </div>
                    <div className="ft-content">
                        <h6>drama club</h6>
                        <p>
                            the quick brown fox jumped over the lazy dog 
                            na hili penzi la ukweli baby nipe tu na ukinikumbatia
                            puuu
                        </p>
                        <div>
                            <h6>block j</h6>
                            <h6>room 31</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="rc-box">
            <span className='title'> recomended clubs</span>
            <div className="rc-wrapper">
                <div className="rc-container">
                    <div className="rc-pic">
                        <img src="/pictures/customercare.PNG" alt="" />
                    </div>
                    <div className="rc-content">
                        <span>musicclub </span>
                    </div>
                </div>
                <div className="rc-container">
                    <div className="rc-pic">
                        <img src="/pictures/babygirl.jpg" alt="" />
                    </div>
                        <div className="rc-content">
                            <span>musicclub </span>
                        </div>
                </div>
                    
                <div className="rc-container">
                    <div className="rc-pic">
                        <img src="/pictures/homespic.jpg" alt="" />
                    </div>
                    <div className="rc-content">
                        <span>musicclub </span>
                    </div>
                </div>
                <div className="rc-container">
                    <div className="rc-pic">
                        <img src="/pictures/developer.jpg" alt="" />
                    </div>
                    <div className="rc-content">
                        <span>musicclub </span>
                    </div>
                </div>
                <div className="rc-container">
                    <div className="rc-pic">
                        <img src="/pictures/rotaract.jpg" alt="" />
                    </div>
                    <div className="rc-content">
                        <span>musicclub </span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="gr-box">
            <div className="title">
                <span>Clubs by categories</span>
            </div>
            <div className="gr-wrapper">
                <div className="cat">
                    <span className='heading'>academics</span>
                </div>
                <div className="gr-cwrap">
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/rasterman.jpg" alt="img" />
                        </div>
                        <div className="gr-content">
                            <span>civil club</span>
                        </div>
                    </div>
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/mrform.jpg" alt="img" />

                        </div>
                        <div className="gr-content">
                            <span>civil club</span>
                        </div>
                    </div>
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/smilygirl.jpg" alt="img" />

                        </div>
                        <div className="gr-content">
                            <span>civil club</span>
                        </div>
                    </div>
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/student 1.jpg" alt="img" />

                        </div>
                        <div className="gr-content">
                            <span>civil club</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gr-wrapper">
                <div className="cat">
                    <span className='heading'>art categories</span>
                </div>
                <div className="gr-cwrap">
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/coolboy.jpg" alt="img" />
                        </div>
                        <div className="gr-content">
                            <span>drama club</span>
                        </div>
                    </div>
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/customercare.PNG" alt="img" />

                        </div>
                        <div className="gr-content">
                            <span>dance club</span>
                        </div>
                    </div>
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/rasterman.jpg" alt="img" />

                        </div>
                        <div className="gr-content">
                            <span>art club</span>
                        </div>
                    </div>
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/babygirl.jpg" alt="img" />

                        </div>
                        <div className="gr-content">
                            <span>music club</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gr-wrapper">
                <div className="cat">
                    <span className='heading'>service category</span>
                </div>
                <div className="gr-cwrap">
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/content.jpg" alt="img" />
                        </div>
                        <div className="gr-content">
                            <span>enviroment</span>
                        </div>
                    </div>
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/rotaract.jpg" alt="img" />

                        </div>
                        <div className="gr-content">
                            <span>scouts club</span>
                        </div>
                    </div>
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/mbogi.jpg" alt="img" />

                        </div>
                        <div className="gr-content">
                            <span>mcs & Djs</span>
                        </div>
                    </div>
                    <div className="gr-container">
                        <div className="gr-img">
                            <img src="/pictures/mbogi.jpg" alt="img" />

                        </div>
                        <div className="gr-content">
                            <span>St johnes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

            
  
  )
}

export default Myclubs