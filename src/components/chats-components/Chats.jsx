import React, { useContext } from 'react'
import {useState,useEffect} from 'react'
import "./chats.css"
import {BiLike} from "react-icons/bi"
import {BsShare,BsSend,BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineMessage, AiFillLike} from "react-icons/ai"
import moment from "moment"
import { io } from "socket.io-client";
import Comments from '../forms/Comments'
import { makeRequest } from '../../../axios'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { useMutation, useQueryClient, useQuery} from '@tanstack/react-query'

const Chats = ({chats}) => {

    const {currentUser} = useContext(AuthContext)
    
    const liked = true 
    const PostID = chats.PostID
  

    const [OpenAction, setOpenAction] = useState(false)
    const [deleteUp, setDeleteUP] = useState(false)


    const handleaction = () =>{
        setOpenAction(!OpenAction)
        if (currentUser.regno === chats.StudentID) {
            setDeleteUP(true)
            console.log(chats.StudentID);
            console.log(currentUser.regno)
        }
    }
    const [OpenComments, setOpenComments] = useState(false)
    const Commentaction = () =>{
        setOpenComments(!OpenComments)
    }

    const {isLoading, error, data} = useQuery(['likes', PostID], async ()=>{
        const response = await axios.get("http://localhost:8800/api/likes/getLikes?postID="+PostID)
        return response.data
    });

    const queryClient = useQueryClient()  

    const mutation = useMutation( 
        async (liked) =>{
            if (liked) return  await makeRequest.delete("/likes/deleteLikes?postID="+PostID)
            return await makeRequest.post("/likes/addLikes", {postID:PostID})
        },
        {
            onSuccess: () => {
            queryClient.invalidateQueries(['likes', PostID])
        },
    });

    const deleteMutation = useMutation( 
        async (PostID) =>{
            return makeRequest.delete("/posts/deletePost?postID=" + PostID)
            
        },
        {
            onSuccess: () => {
            queryClient.invalidateQueries(["post"])
        },
    });

    const handleClick = async (e) =>{
        e.preventDefault()
        mutation.mutate(data.includes(currentUser.regno))
    }
    const handleDelete = () =>{
        deleteMutation.mutate(PostID);
        setOpenAction(!OpenAction);
    }
    
  return (
    <>
        <div className="chats_container">
            <div className="chat-header">
                <div className="left">
                    <img src={`/upload/${chats.profile_pic}`} alt=""  />
                    <div className="sub-heading">
                        <span className='heading3'>{chats.fname}  {chats.sname}</span>
                        <span className='time'>{moment(chats.createdAt).fromNow()}</span>
                    </div>
                </div>
                <div className="right" > 
                    <BsThreeDotsVertical onClick={handleaction}/>
                    <div className={`actions-p ${OpenAction ? 'active' : ''}`}>
                        {
                            deleteUp 
                            ?   <div>
                                    <span style={{margin:"0.5rem"}}>update</span>
                                    <span style={{margin:"0.5rem"}} onClick={handleDelete}>delete</span>
                                    <span style={{margin:"0.5rem"}}> hide </span>
                                </div>
                            :   <span> hide </span>
                        }
                    </div>
                </div>
            </div>
            <div className="content">
                <p>
                    {chats.desc}
                </p>
                <img src={`/upload/${chats.post_img}`} alt=""  />
                <hr style={{ color:"grey"}}/>
                <div className="pp-reactions">
                    <div className="emojis">
                        <div className='emoji'>
                            <span role="img" aria-label="smile">😊</span>
                            <span role="img" aria-label="heart">❤️</span>
                            <BiLike className="ci"/>
                        </div>
                        <span>{data?.length} likes</span>
                    </div>
                    <div className="pics">
                        {/* <span className="pics">reacted by </span> */}
                        {/* <img src={chats.reactions[0]} alt="IMG" />
                        <img src={chats.reactions[1]}alt="IMG" />
                        <img src={chats.reactions[2]}alt="IMG" /> */}
                        <span className="extra"></span>
                    </div>
                </div>
                <div className="react">
                    <div className="share">
                        {
                            isLoading ? "loading ..." :
                            data?.includes(currentUser.regno)
                            ?   (<AiFillLike style={{color:"#13d236"}}className="icons" onClick={handleClick}></AiFillLike> )
                            :  ( <BiLike className="icons" onClick={handleClick}></BiLike>)
                        }
    
                        <span>{data?.length} likes</span>
                    </div>
                    <div className="share"  onClick={Commentaction}>
                        <AiOutlineMessage className="icons"/>
                        <span> comment</span>
                    </div>
                    <div className="share">
                        <BsShare className="icons"/>
                        <span>share</span>
                    </div>
                </div>
                {OpenComments &&
                    <Comments comment={chats.PostID} prof={chats.profile_pic}/>
                }
            </div>
        </div>
    </>
   
    

  )
}

export default Chats