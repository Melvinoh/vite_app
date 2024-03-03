import React from 'react'
import MembersProfile from '../../components/clubs & sports components/MembersProfile'
import GalleryComponent from '../../components/gallery/GalleryComponent'
import Messanger from '../../components/clubs & sports components/Messanger'


function Gallery() {
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

  return (
   <div className="wrapper-con">
      <h1 className='heading1'>gallery</h1>
      <div >
        <Messanger/>
      </div>
      
   </div>
  )
}

export default Gallery