import React from 'react'
import {useState} from 'react'
import "./chats.css"
import {BiLike} from "react-icons/bi"
import {BsShare,BsSend,BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineMessage} from "react-icons/ai"
const Chats = ({chats}) => {

    const [OpenAction, setOpenAction] = useState(false)
    const handleaction = () =>{
        setOpenAction(!OpenAction)
    }
  return (
    <>
        <div className="chats_container">
            <div className="chat-header">
                <div className="left">
                    <img src={chats.profile_pic} alt="img" />
                    <div className="sub-heading">
                        <span>{chats.name}</span>
                        <span className='time'>{chats.time}</span>
                    </div>
                </div>
                <div className="right" > 
                    <BsThreeDotsVertical onClick={handleaction}/>
                    <div className={`actions-p ${OpenAction ? 'active' : ''}`}>
                        <span>update</span>
                        <span>delete</span>
                        <span>hide</span>
                    </div>
                </div>

            </div>
            <div className="content">
                <img src="" alt="" />
                <p>
                    {chats.content}
                </p>
                <hr />
                <div className="pp-reactions">
                  
                    <div className="emojis">
                        <div className='emoji'>
                            <span role="img" aria-label="smile">😊</span>
                            <span role="img" aria-label="heart">❤️</span>
                            <BiLike className="ci"/>
                        </div>
                        <span>+24 likes</span>
                    </div>
                    <div className="pics">
                        {/* <span className="pics">reacted by </span> */}
                        <img src={chats.reactions[0]} alt="IMG" />
                        <img src={chats.reactions[1]}alt="IMG" />
                        <img src={chats.reactions[2]}alt="IMG" />
                        <span className="extra">+4 comments</span>
                    </div>
                </div>
                <div className="react">
                    <div className="share">
                        
                        <BiLike className="icons">
                            <input type="radio" name="like" id="like" />
                        </BiLike>
                        <span>like</span>
                    </div>
                    <div className="share">
                        <AiOutlineMessage className="icons"/>
                        <span> comment</span>
                    </div>
                    <div className="share">
                        <BsShare className="icons"/>
                        <span>share</span>
                    </div>
                </div>
                <div className="comment-box">
                    <div className="comment-pp"><img src={chats.profile_pic} alt="" /></div>
                    <input type="text" placeholder='write a comment'/>
                    <div className="send-btn"><BsSend/></div>
                </div>
                <div className="r-comments">
                    <div className="img"><img src="/pictures/customercare.PNG" alt="" /></div>
                   <div className=''>
                        <div className="r-content">
                            <h6>bill eilliams comment</h6>
                            <p> 4hr ago</p>
                        </div>
                        <p className="p">
                            happy birthday bro man!
                        </p>
                   </div>
                </div>
            </div>
        </div>
    </>
   
    

  )
}

export default Chats