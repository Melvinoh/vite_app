import React from 'react'

function Slidecard({item}) {
  return (
    <div className="slide_card">
        <img src={ item.img} alt="" srcset=""  className='slide_img'/>
        <div className="overlay">
            <span > {item.title} </span>
        </div>
    </div>
  )
}
export default Slidecard