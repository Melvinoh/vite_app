import React from 'react'
import ComposeForm from '../../components/forms/ComposeForm'
import Chats from '../../components/chats-components/Chats'
import EventsCalendar from '../../components/events /EventsCalendar'
import chats from "../../data/chats-clubs.json"
import { useState ,useEffect} from 'react'
import {BsPenFill} from 'react-icons/bs';
import "./singlepages.css";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import GalleryComponent from '../gallery/GalleryComponent'


const Members = ({items,id}) => {

    const [OpenTab, setOpenTab] = useState(false)
    const [galleryTab, setGalleryTab] = useState(false)
    const [IsActive, setIsActive] = useState(false)
    useEffect(() => {
        window.addEventListener('load' , setIsActive(true))
        return () => {
          window.removeEventListener('load', setIsActive(false))
        }
      }, [])

      const images = [
        '/pictures/rasterman.jpg',
        '/pictures/babygirl.jpg',
        '/pictures/coolboy.jpg',
        '/pictures/rotaract.jpg',
        '/pictures/mbogi.jpg',
        '/pictures/mrform.jpg',
        '/pictures/mbogi.jpg',
        '/pictures/smilygirl.jpg',
        '/pictures/homespic.jpg',
        '/pictures/developer.jpg',
        '/pictures/darling.jpg',
      ]
      
    const handleopen = () =>{
        setOpenTab(true)
        setIsActive(false)
    }
    const handleGallery = () =>{
        setGalleryTab(!galleryTab)
        setIsActive(false)
    }
    const handleswitch = () =>{
        setOpenTab(false)
        setIsActive(true)
    }
  
    const [OpenCompose, setOpenCompose] = useState(false)
    const opencomposeform  = ()=>{
      setOpenCompose(!OpenCompose)
    }
    const closecompose = () =>{
      setOpenCompose(false)
    }

    const ID = {'clubid':id}
   
    
    const {isLoading, error, data} = useQuery(['post'], async ()=>{
        const response = await axios.post("http://localhost:8800/api/posts/getPost", ID)
        return response.data;
    })
   
    if (isLoading) return <div>loading ...</div>
    if (error) return <div>{error.message}</div>

  return (
    <>
        <div className="form-modal">
            <ComposeForm isOpen={OpenCompose} close={closecompose} items={items} id={id}/>
        </div>
        <div className='Members_container'>
            
            <div className="mbheader">
                <div className="img">
                    <img src={`/pictures/${items.profile_pic}`} alt="" />
                </div>
                <h4 className="heading1">{items.name}</h4>
                <div className="tabs-wrapper">
                    <span className={`tabs  ${IsActive ? 'active' : '' }`} onClick={handleswitch}>posts</span>
                    <span className={`tabs  ${OpenTab ? 'active' : ''}`} onClick={handleopen}> events</span>
                    <span className={`tabs  ${OpenTab ? 'active' : ''}`} onClick={handleGallery}>gallery</span>
                    <span className='tabs'>members</span>
                </div>
            </div>
          {
            galleryTab ? <GalleryComponent images={images}/>
            :
                <>
                    <div className="Mb_content-box">
                        <div className={ `Mb-left ${OpenTab ? 'active' : ''}`}>
                            {
                            data.map(data =>(
                                    <Chats key={data.id} chats={data} />
                                ))
                            }
                            <div className="compose-btn">
                                <BsPenFill onClick={opencomposeform}/>
                            </div>
                        </div>
                        <div className="Mb-right">
                            <EventsCalendar/>
                        </div>
                    </div>
                </>
          }
           
        </div>
    </>
    )
}
export default Members