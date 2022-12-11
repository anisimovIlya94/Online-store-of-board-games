import React, { useState, useEffect } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../modules/styles-vertical.css';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);


const VerticalSlider = ({activeIndex, onChangeIndex, id, images}) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const slideNext = () => {
    if (activeIndex < images.length - 1) {
      onChangeIndex(activeIndex + 1)
    }
    swiperRef.slideNext(1000, false)
  };
  const slidePrev = () => {
    if (activeIndex > 0) {
      onChangeIndex(activeIndex - 1)
    }
    swiperRef.slidePrev(1000, false)
  };
  const slideTo = (id) => {
    swiperRef.slideTo(id)
  }
  const imagesLength = images.length
  useEffect(() => {
    // console.log(activeIndex)
    if (activeIndex) {
      slideTo(activeIndex)
    }
    },[activeIndex])
  return (
    <div className="wrapper">
      <p className={"append-buttons"}>
       <button disabled={imagesLength<4} onClick={() => slidePrev(1)} className={"prepend-slide " + (imagesLength < 4 ? "disabled" : "")}>
       <i className="bi bi-chevron-up"></i>
        </button>
      </p>
      
      <Swiper
        key={images[0] + "11"}
        direction={"vertical"}
        onSwiper={setSwiperRef}
        slidesPerView={imagesLength > 3 ? 3 : imagesLength}
        centeredSlides={true}
        spaceBetween={30}
        centeredSlidesBounds={true}
        virtual
        style={{height: "330px"}}
      >
        {/* <div className="swipewrap"> */}
        {images.map((img, index) => {
          return (
            <SwiperSlide style={{padding: "10px"}} key={img}>
          <button id={index} onClick={()=>{onChangeIndex(index)}} cursor={"pointer"} className="butt">
          <img cursor={"pointer"} className={"image " + (activeIndex === index ? "active" : "")} src={require(`../../images/product/productsLibrary/${img}`)} alt="" />
          </button>
        </SwiperSlide>
          )
        })}
        {/* <SwiperSlide style={{padding: "10px"}}>
          <button id={0} onClick={()=>{onChangeIndex(0)}} cursor={"pointer"} className="butt">
          <img cursor={"pointer"} className={"image " + (activeIndex === 0 ? "active" : "")} src={image3} alt="" />
          </button>
        </SwiperSlide> */}
        {/* </div> */}
        
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>

      <p className="append-buttons">
        <button disabled={imagesLength<4} onClick={() => slideNext(250)} className={"prepend-slide " + (imagesLength < 4 ? "disabled" : "")}>
          <i className="bi bi-chevron-down"></i>
        </button>
      </p>
    </div>
  );
};

export default VerticalSlider;
