import React, { useState, useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import MainCard from "./mainCard";
import classes from "../../modules/mainSlick.module.css"
import arrowRight from "../../images/catalog/arrow-right.svg"
import arrowLeft from "../../images/catalog/arrow-left.svg"

const currentItems = 4
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1400: { items: 3 },
    1500: { items: currentItems },
};

const Slick = ({ cards }) => {
    // console.log(cards)
    const [activeIndex, setActiveIndex] = useState(0);
    const [items] = useState(
        cards.map((card) => {
            return <MainCard key={card._id} cardInformation={card} role="presentation" />
        })
    );
    // const ff = cards.map((card) => {
    //     console.log(card)
    //     return <MainCard cardInfo={card}  role ="presentation"/>
    // })
const difference = items.length - currentItems;
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    return [
        <div className={classes.slickMargin}>
            <div className={classes.slickWrapper}>
                    {/* <button className={classes.leftButton} style={{backgroundColor: "#fcf3ed", margin: "0px 20px 0px 0px"}} disabled={activeIndex===0} onClick={slidePrev}>
                        <img src={arrowLeft} alt="" />
                    </button> */}
                    <div className={classes.alice}>
                    <button className={classes.leftButton} style={{backgroundColor: "#fcf3ed", margin: "0px 20px 0px 0px"}} disabled={activeIndex===0} onClick={slidePrev}>
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
                    />
                    <button className={classes.rightButton} style={{backgroundColor: "#fcf3ed"}} disabled={activeIndex===difference ? true : false} onClick={slideNext}>
                        <img src={arrowRight} alt="" />
                    </button>
                    </div>
                    {/* <button className={classes.rightButton} style={{backgroundColor: "#fcf3ed"}} disabled={activeIndex===difference ? true : false} onClick={slideNext}>
                        <img src={arrowRight} alt="" />
                    </button> */}
            </div>
        </div>
    ];
};
export default Slick;