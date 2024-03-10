import React, { useState } from 'react'
import {IoIosClose} from 'react-icons/io'
import "./forms.css"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from "axios"
import { makeRequest } from '../../../axios'
import { GrGallery } from "react-icons/gr";
import { MdOutlineGifBox,MdAddPhotoAlternate,MdLocationPin  } from "react-icons/md";



const ComposeForm = ({close, isOpen, items, id}) => {

    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const uploadFile = async () =>{
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
        async (newpost) =>{
            return  await makeRequest.post("/posts/addPost", newpost)
        },
        {
            onSuccess: () => {
            queryClient.invalidateQueries(['post'])
        },
   });
    const handleShare = async (e) =>{
        e.preventDefault()
        let imgUrl = "";
        if(file) imgUrl = await uploadFile()
        mutation.mutate({desc:desc,clubid:id, img:imgUrl})
        close();
    }

  return (
    <div  className={`form_modal ${isOpen ? "active" : "" }`} >
        
        <div className='compose'>
            < IoIosClose className='icons' onClick={close}/>
            <div className=' heading3 cp_heading' > 
                <span>create post</span>
            </div>
            <div className='cp_profile'>
                <div className='cp_img'>
                    <img src={`/pictures/${items.profile_pic}`}alt="" />
                </div>
                <div className='cp_data'>
                    <span>writing a post to  :</span>
                    <span style={{backgroundColor: "#cbc8c8",padding :"2px",border_radius:"25%"}}>{items.name}</span>
                </div>
            </div>
            <div className="cp_form">
                <form action="" className='c_form'>
                    <input type="hidden" name="clubID" value={id}/>

                    <textarea name="" id="" cols="30" rows="3" placeholder='whats on your mind?'  onChange={(e) =>setDesc(e.target.value)}></textarea>

                    <div className="cp_imgchoose">
                        {
                            file ? 
                            <img src={URL.createObjectURL(file)} alt="" /> :
  
                            <>
                                <label htmlFor="file-input" className='img_input'>
                                    <div className="box">
                                        <MdAddPhotoAlternate />
                                    </div>
                                    <span>Add photos/videos</span>
                                    <span> or drag and drop</span>
                                    
                                </label>
                                <input type="file" id='file-input' name="image" onChange={(e) =>setFile(e.target.files[0])}/>
                            </>
                        }  
                    </div>

                    <div className="cp_addons">
                        <span>add to your post</span>
                        <div className='addons'>
                            <GrGallery  />
                            <MdLocationPin />
                            <MdOutlineGifBox />

                        </div>
                    </div>
                    <button className='c_button'  onClick={handleShare}> publish</button>
                </form>
            </div>
        </div>
    </div>
   
  )
}

export default ComposeForm