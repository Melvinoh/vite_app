import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function SliderWrapper() {
  return (
    <Carousel autoPlay infiniteLoop showArrows={false} dots={true} className='wrapper'>
      <div className='slides'>
        <h3>Slide 1</h3>
      </div>
      <div  className='slides'>
        <h3>Slide 2</h3>
      </div>
      <div  className='slides'>
        <h3>Slide 3</h3>
      </div>
    </Carousel>
  );
}


export default SliderWrapper