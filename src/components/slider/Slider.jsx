import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import "./slider.css";

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Carousel responsive={responsive} autoPlay={true} infinite={true} arrows={false} dots={true}>
        <div className='slider'>
            <img src="/pictures/homespic.jpg" alt="" />
            <div className="text">
              <span> platform to have the best of tuk</span>
            </div>
        </div>
        <div className='slider'>
            <img src="/pictures/content.jpg" alt="" />
            <div className="text">
              <span>you have control of everything</span>
            </div>
        </div >
        <div className='slider'>
            <img src="/pictures/rotaract.jpg" alt="" />
            <div className="text">
              <span> the best platform to connect</span>
            </div>
        </div>
    </Carousel>
  )
}

export default Slider