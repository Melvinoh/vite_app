import React from 'react'
import "./chats.css"
import {BiLike} from "react-icons/bi"
import {BsShare,BsSend} from "react-icons/bs"
import {AiOutlineMessage} from "react-icons/ai"
const Chats = () => {
  return (
    <>
    <div className="chats_wrapper">
        <div className="chat_title">
            <div className="ttwrap title">
                <div>
                    <img src="/pictures/mbogi.jpg" alt="img" />
                </div>
                <span>rotaract club </span>
            </div>
            <span className="date">13/02/2023</span>
        </div>
        <div className="chats_container">
            <div className="chat-header">
                <div className="wrapp">
                    <img src="/pictures/coolboy.jpg" alt="img" />
                    <div className="name">
                        <span>muturi melvin</span>
                        <span>4hrs</span>
                    </div>
                </div>
                <div className="poststatus"> posted an update</div>
            </div>
            <div className="content">
                <p>
                    Material Design is a design system built 
                    and supported by Google design
                </p>
                <div className="reactions">
                    <div className="emojis">
                        <span role="img" aria-label="smile">😊</span>
                        <span role="img" aria-label="heart">❤️</span>
                        <BiLike className="ci"/>
                    </div>
                    <div className="persons">
                        <span className="persons">reacted by </span>
                        <img src="/pictures/mrform.jpg" alt="IMG" />
                        <img src="/pictures/rasterman.jpg" alt="IMG" />
                        <img src="/pictures/babygirl.jpg" alt="IMG" />
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
                    <div className="form-pp"><img src="/pictures/rasterman.jpg" alt="" /></div>
                    <input type="text" placeholder='write a comment'/>
                    <div className="ci"><BsSend/></div>
                </div>
            </div>
        </div>
    </div>
    </>
   
    

  )
}

export default Chats