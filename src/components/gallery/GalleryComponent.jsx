import React, { useState }from 'react'
import {RxCaretLeft,RxCaretRight} from 'react-icons/rx';
import './galleryc.css'



const GalleryComponent = ({images}) => {

    const [listBox , setListBox] = useState(false)
    const [Index, setIndex] = useState(0);

    const ShowImage = (i) =>{
        setIndex(i)
        setListBox(true)
    }
    const showNext = (Index,e) =>{
        let next =  Index + 1
        setIndex(next)
        console.log(Index);
    }
    const showPrevious = (Index) => {
        if (Index >= 0 ){
            let Previous = Index - 1;
            setIndex(Previous);
        }
    }
    
  return (
    <div className="gallery">
      <div className="grid-img">
        {
            images.map((images,index) =>( <img  key={index} src={images}  onClick={() =>{ShowImage(index)}} alt="" />))
               
        }
      </div>
    {listBox &&
        <>
            <div className="light-box">
                <div className="close_btn"></div>
                <div className="lgb-content">
        
                    <RxCaretLeft onClick={()=>showPrevious(Index)}/>
        
                    <img src={images[Index]} alt="" />
        
                    <RxCaretRight onClick={()=>{showNext(Index)}}/>
        
                </div>
                
            </div>
            <div className="overlay1" onClick={()=>{setListBox(false)}}></div>
        </>
    }
    </div>
  )
}

export default GalleryComponent
