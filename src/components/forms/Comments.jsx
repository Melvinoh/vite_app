import { useMutation, useQueryClient, useQuery} from '@tanstack/react-query'
import axios from 'axios'

import React, { useState, useEffect } from 'react'
import {BsSend } from 'react-icons/bs'
import { makeRequest } from '../../../axios'
import moment from "moment"

const Comments = ({comment, prof}) => {


    const PostID = comment

    const [desc, setDesc] = useState("")

 


    const {isLoading, error, data} = useQuery(['comments'], async ()=>{
        const response =  await axios.get("http://localhost:8800/api/comments/getcomment?postID="+PostID)
        return response.data
    })   
    const queryClient = useQueryClient()  
    const mutation = useMutation( 
        async (newcomment) =>{
            return  await makeRequest.post("/comments/addComment", newcomment)
        },
        {
            onSuccess: () => {
            queryClient.invalidateQueries(['comments'])
        },
   });

    const handleShare = async (e) =>{
        e.preventDefault()
        mutation.mutate({desc:desc , postID:PostID})
        setDesc("")
    }
  return (
    <div className="comment-wrapper">
        <div className="comment-box">
            <div className="comment-pp"> <img src={`/upload/${prof}`} alt=""  /></div>
                <input type="text" placeholder='write a comment' name='desc' value={desc} onChange={(e) =>setDesc(e.target.value)} />
            <div className="send-btn" onClick={handleShare}><BsSend/></div>
        </div>
       {
            isLoading 

            ? <div> loading ...</div> 
            : data?.map((comment) => (
                <div className="r-comments">
                    <div className="img"><img src={`/upload/${comment.profile_pic}`} alt="" /></div>
                    
                    <div className="r-content">
                        <h6>{comment.fname} {comment.sname}</h6>
                        <p className="p">
                            {comment.description}
                        </p>
                    </div>
                
                
                    <p>{moment(comment.createdAt).fromNow()}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Comments