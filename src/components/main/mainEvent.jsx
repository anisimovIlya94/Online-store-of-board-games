import React, { useState, useEffect } from 'react';
import eventBackground from "../../images/main/event-image.png"
import classes from "../../modules/main.module.css"

const MainEvent = ({title, date, preview, short}) => {
    const [openPreview, setOpenPreview] = useState(false)
    const shortPreview = preview.slice(0,short) + "..."
    const togglePreview = () => {
        setOpenPreview((prevState)=>!prevState);
    }
    return ( 
        <div className={"card border-light " + classes.eventCardWrapper} style={{borderRadius: '15px'}}>
            <a href="#" onMouseEnter={togglePreview} onMouseLeave={togglePreview}>
            <img src={eventBackground} className="card-img-top" alt="..."/>
            <div className={"card-body " + classes.eventCardBody}>
                <span className={classes.eventTitle}>{title}</span>
                <span className={classes.eventDate}>{date}</span>
                <p className={classes.eventPreview}>{openPreview ? preview : shortPreview}</p>
            </div>
            </a>
        </div>
     );
}
 
export default MainEvent;