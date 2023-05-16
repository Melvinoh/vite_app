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
                <div className="wrapp">
                    <img src={chats.profile_pic} alt="img" />
                    <div className="name">
                        <span>{chats.name}</span>
                        <span>{chats.time}</span>
                    </div>
                </div>
                <div className="poststatus"> posted an update</div>
            </div>
            <div className="content">
                <p>
                    {chats.content}
                </p>
                <div className="reactions">
                    <div className="emojis">
                        <span role="img" aria-label="smile">😊</span>
                        <span role="img" aria-label="heart">❤️</span>
                        <BiLike className="ci"/>
                    </div>
                    <div className="persons">
                        <span className="persons">reacted by </span>
                        <img src={chats.reactions[0]} alt="IMG" />
                        <img src={chats.reactions[1]}alt="IMG" />
                        <img src={chats.reactions[2]}alt="IMG" />
                        <span className="extra">+4 comments</span>
                    </div>
                </div>
                <div className="react">
                    <div className="share">
                        <BiLike className="ci"/>
                        <span>like</span>
                    </div>
                    <div className="share">
                        <AiOutlineMessage className="ci"/>
                        <span>comment</span>
                    </div>
                    <div className="share">
                        <BsShare className="ci"/>
                        <span>share</span>
                    </div>
                </div>
                <div className="form-content">
                    <div className="form-pp"><img src={chats.profile_pic} alt="" /></div>
                    <input type="text" placeholder='write a comment'/>
                    <div className="ci"><BsSend/></div>
                </div>
            </div>
        </div>
    </>
   
    

  )
}

export default Chats