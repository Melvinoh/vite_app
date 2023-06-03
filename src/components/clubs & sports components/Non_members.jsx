import React from 'react'
import Reviews from '../cards/Reviews';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./singlepages.css";
import { EffectCoverflow, Pagination } from "swiper";
import Card1 from '../cards/Card1';
import Awardscard from '../cards/Awardscard';
import Registration from '../forms/Registration';

const Non_members = () => {
  return (
  <>
    <div className='sub-heading Nb-heading'> Rotaract club</div>
    <div className="Nb_container">
      <div className="Nb-left">
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
            <h6 className='heading'>if you want fun here it is ! </h6>
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
        <div><span className=' sub-heading'>Reviews</span></div>
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
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
            <Reviews/>
          </SwiperSlide>
          <SwiperSlide>
            <Reviews/>
          </SwiperSlide>
          <SwiperSlide>
            <Reviews/>
          </SwiperSlide>
          <SwiperSlide>
            <Reviews/>
          </SwiperSlide>
          <SwiperSlide>
            <Reviews/>
          </SwiperSlide>
          <SwiperSlide>
            <Reviews/>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="cl-leaders">
        <span className='sub-heading'>club leaders</span>
        <div className="leaders_wrapper">
          <div className="ld-card_wrapper">
              <img src="/pictures/mrform.jpg" alt="img" />
              <div className="content">
                  <span>emily wachira </span>
                  <span>chair person</span>
                  <span className='button'>+254 28319879</span>
              </div>
          </div>
          <div className="ld-card_wrapper">
              <img src="/pictures/customercare.PNG" alt="img" />
              <div className="content">
                  <span>Martin kamau </span>
                  <span>secretary </span>
                  <span className='button'>+254 3467 897</span>
              </div>
          </div>
          <div className="ld-card_wrapper">
              <img src="/pictures/coolboy.jpg" alt="img" />
              <div className="content">
                  <span>MUturi Melvin </span>
                  <span>Tressure </span>
                  <span className='button'>+254 789678908</span>
              </div>
          </div>
        </div>
      </div>
      </div>
      <div className="Nb-right">
        <Registration/>

        <div className="awards-wrapper">
          <span className='sub-heading'>awards</span>
          <Awardscard/>
          <Awardscard/>
          <Awardscard/>
        </div>
        
        <div className="card1-box">
          <div className='sub-heading'>
              <span>recomended clubs</span>
          </div>
          <div className="cd1-wrapper">
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
          </div>
        </div> 
      </div>
    </div>
  </>
   
)
}

export default Non_members