import image3 from "../../images/catalog/warhammer-card.jpg"
import arrowUp from "../../images/catalog/arrow-up.svg"
import arrowDown from "../../images/catalog/arrow-down.svg"
import React, { useRef, useState, useEffect } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../modules/styles-vertical.css';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);


const VerticalSlider = ({activeIndex, onChangeIndex}) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const slideNext = () => {
    swiperRef.slideNext(1000, false)
  };
  const slidePrev = () => {
    swiperRef.slidePrev(1000, false)
  };
  const slideTo = (id) => {
    console.log(id)
    swiperRef.slideTo(id)
  }
  useEffect(() => {
    console.log(activeIndex)
    if (activeIndex) {
      slideTo(activeIndex)
    }
    },[activeIndex])
  return (
    <div className="wrapper">
      <p className="append-buttons">
      <button onClick={() => slidePrev(1)} className="prepend-slide">
          <img src={arrowUp}/>
        </button>
      </p>
      
      <Swiper
        direction={"vertical"}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        centeredSlidesBounds={true}
        virtual
      >
        <div className="swipewrap">
        <SwiperSlide style={{padding: "10px"}}>
          <button id={0} onClick={()=>{onChangeIndex(0)}} cursor={"pointer"} className="butt">
          <img cursor={"pointer"} className={"image " + (activeIndex === 0 ? "active" : "")} src={image3} alt="" />
          </button>
        </SwiperSlide>
        </div>
        
        <SwiperSlide>
          <button id={1} onClick={()=>{onChangeIndex(1)}} cursor={"pointer"} className="butt">
          <img cursor={"pointer"} className={"image " + (activeIndex === 1 ? "active" : "")} src={image3} alt="" />
          </button>
        </SwiperSlide>
        <SwiperSlide>
        <button id={2} onClick={()=>{onChangeIndex(2)}} cursor={"pointer"} className="butt">
          <img cursor={"pointer"} className={"image " + (activeIndex === 2 ? "active" : "")} src={image3} alt="" />
          </button>
        </SwiperSlide>
        <SwiperSlide>
        <button id={3} onClick={()=>{onChangeIndex(3)}} cursor={"pointer"} className="butt">
          <img cursor={"pointer"} className={"image " + (activeIndex === 3 ? "active" : "")} src={image3} alt="" />
          </button>
        </SwiperSlide>
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => slideNext(250)} className="prepend-slide">
          <img src={arrowDown}/>
        </button>
      </p>
    </div>
  );
};

export default VerticalSlider;
