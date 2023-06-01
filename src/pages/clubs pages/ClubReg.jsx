import React from 'react'
import Reviews from '../../components/cards/Reviews';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./reg.css";
import { EffectCoverflow, Pagination } from "swiper";

const ClubReg = () => {
  return (
   
    <div className="clubreg">
      <div className="prof-box">
        <div className="top">
          <img src="/pictures/mbogi.jpg" alt="" />
          <div className="prof-content">
            <span> name : rotaract club</span>
            <span> block: j</span>
            <span>room : j24</span>
            <span>chair : emily</span>
            <span>contacts : +2547890986</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="wrapper">
            <h6 className='heading'> rotarct club</h6>
            <p>
              the quick brown fox jumped over the lazy dog
              the quick brown fox jumped over the lazy dog
            </p>
            <div>
              <span>registratoion fee</span>
              <span>ksh 50</span>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ClubReg