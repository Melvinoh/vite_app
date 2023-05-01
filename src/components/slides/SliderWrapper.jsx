import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./slider.css"

function SliderWrapper() {
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
    <>
      <Carousel items={1} arrows={false} showDots={true} autoPlay={true} responsive={responsive} infinite={true}>
        <div><img src="/pictures/homespic.jpg" alt="" /></div>
        <div><img src="/pictures/rotaract.jpg" alt="" /></div>
        <div><img src="/pictures/mbogi.jpg" alt=""/></div>
      </Carousel>;

    </>

  );
}


export default SliderWrapper