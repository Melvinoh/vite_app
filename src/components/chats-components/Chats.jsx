import React from 'react'
import "./chats.css"
import {BiLike} from "react-icons/bi"
import {BsShare,BsSend} from "react-icons/bs"
import {AiOutlineMessage} from "react-icons/ai"
const Chats = ({chats}) => {
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
                <div className="right"> posted an update</div>
            </div>
            <div className="content">
                <img src="" alt="" />
                <p>
                    {chats.content}
                </p>
                <div className="pp-reactions">
                    <div className="emojis">
                        <span role="img" aria-label="smile">😊</span>
                        <span role="img" aria-label="heart">❤️</span>
                        <BiLike className="ci"/>
                    </div>
                    <div className="pics">
                        <span className="pics">reacted by </span>
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
                        <span>comment</span>
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
            </div>
        </div>
    </>
   
    

  )
}

export default Chats