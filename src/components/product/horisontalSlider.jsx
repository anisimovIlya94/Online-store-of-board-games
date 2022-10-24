import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import classes from "../../modules/horisontalSlider.module.css"
import arrowRight from "../../images/catalog/arrow-right.svg"
import arrowLeft from "../../images/catalog/arrow-left.svg"
import image3 from "../../images/catalog/warhammer-card.jpg"

const currentItems = 1
const responsive = {
    0: { items: 1 }
};

const HorisontalSlider = ({activeIndex, onChangeIndex}) => {
  const [items] = useState([
    <img className={classes.horisontalImage1} src={image3} alt="" />,
    <img className={classes.horisontalImage1} src={image3} alt="" />,
      <img className={classes.horisontalImage1} src={image3} alt="" />,
    <img className={classes.horisontalImage1} src={image3} alt="" />
    ]);
const difference = items.length - currentItems;
    const slidePrev = () => onChangeIndex(activeIndex - 1);
    const slideNext = () => onChangeIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => onChangeIndex(item);
    return [
        <div className={classes.slickMargin1}>
            <div className={classes.slickWrapper1}>
                    <div className={classes.alice1}>
                    <button className={classes.leftButton1} disabled={activeIndex===0} onClick={slidePrev}>
                        <img src={arrowLeft} alt="" />
            </button>
                    <AliceCarousel
                        mouseTracking
                        disableDotsControls
                        disableButtonsControls
                        items={items}
                        activeIndex={activeIndex}
                        responsive={responsive}
                        onSlideChanged={syncActiveIndex}
                        direction={'column'}
              />
                    <button className={classes.rightButton1} disabled={activeIndex===difference ? true : false} onClick={slideNext}>
                        <img src={arrowRight} alt="" />
                    </button>
                    </div>
            </div>
        </div>
    ];
};
export default HorisontalSlider;