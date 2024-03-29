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

const Non_members = ({items}) => {

  return (
  <>
    <div className='heading1 '> {items.name} club</div>
      <div className="Nb_container">
        <div className="Nb-left">
        <div className="prof-box">
          <div className="top">
            <img src={`/pictures/${items.profile_pic}`} alt=""/>
            <div className="prof-content">
              <span> <b>name :</b>  {items.name}</span>
              <span><b>block :</b>  {items.block}</span>
              <span><b>room :</b>   {items.room}</span>
              <span><b>chair :</b>   emily</span>
              <span><b>tel :</b>  +2547890986</span>
            </div>
          </div>
          <hr />
          <div className="bottom">
            <div className="wrapper">
              <h6 className='heading3'>codding is fun !</h6>
              <p>
                {items.description}
              </p>
              <div>
                <span>registratoion fee</span>
                <span>ksh 50</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews">
          <div><span className=' heading2'>Reviews</span></div>
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
          </Swiper>
        </div>

        <div className="cl-leaders">
          <span className='heading2'>club leaders</span>
          <div className="card4-wrapper">
            <div className="ld-card_container">
                <img src="/pictures/mrform.jpg" alt="img" />
                <div className="content">
                    <span>emily wachira </span>
                    <span>chair person</span>
                    <span className='button'>+254 28319879</span>
                </div>
            </div>
            <div className="ld-card_container">
                <img src="/pictures/customercare.PNG" alt="img" />
                <div className="content">
                    <span>Martin kamau </span>
                    <span>secretary </span>
                    <span className='button'>+254 3467 897</span>
                </div>
            </div>
            <div className="ld-card_container">
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
          <Registration clubid = {items.ClubsID} />

          <div className="awards-wrapper">
            <span className='heading2'>awards</span>
            <Awardscard/>
            <Awardscard/>
            <Awardscard/>
          </div>
          
          <div className="card1-box">
            <div className='heading2'>
                <span>recomended clubs</span>
            </div>
            <div className="cd1-wrapper">
              <Card1 item2 ={items}/>
              <Card1 item2 ={items}/>
              <Card1 item2 ={items}/>
             
            </div>
          </div> 
        </div>
    </div>
  </>
   
)
}

export default Non_members