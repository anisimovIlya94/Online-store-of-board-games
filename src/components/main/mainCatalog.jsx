import React from "react";
import warGameImage from "../../images/main/WarGames.png"
import paintsImage from "../../images/main/paints.png"
import acsessuarsImage from "../../images/main/acsessuars.jpg"
import magicImage from "../../images/main/magic.png"
import boardGames from "../../images/main/Games.jpg"
import classes from "../../modules/main.module.css"

const MainCatalog = () => {
    const categoriesList = [
        {_id: 'e1', name: "Настольные игры"},
        {_id: 'e2', name: "Magic: The Gathering"},
        {_id: 'e3', name: "Краски"},
        {_id: 'e4', name: "Варгеймы"},
        {_id: 'e5', name: "Акксесуары для игр"},
    ]
    return(
        <div className={"d-flex " + classes.flex}>
                <a href="#">
                    <div className={"card border-light " + classes.bigCardWrapper} style={{borderRadius:'15px'}}>
                        <img src={boardGames} className={"card-img-top " + classes.cardImage}/>
                        <div className={"card-body " + classes.cardBody}>
                            <p className={"card-text " + classes.cardSpan}>Настольные игры</p>
                        </div>
                    </div>
                </a>
        <div className={"row row-cols-1 row-cols-md-2 g-4 " + classes.cardGrid}>
            <div className={"col "}>
                <a href="#">
                <div className={"card border-light " + classes.cardWrapper} style={{borderRadius:'15px'}}>
                    <img src={magicImage} className={"card-img-top " + classes.cardImage}/>
                    <div className={"card-body " + classes.cardBody}>
                        <p className={"card-text " + classes.cardSpan}>Magic: The Gathering</p>
                    </div>
                </div>
                </a>
            </div>
            <div className={"col "}>
                <a href="#">
                <div className={"card border-light " + classes.cardWrapper} style={{borderRadius:'15px'}}>
                    <img src={warGameImage} className={"card-img-top " + classes.cardImage}/>
                    <div className={"card-body " + classes.cardBody}>
                        <p className={"card-text " + classes.cardSpan}>Варгеймы</p>
                    </div>
                </div>
                </a>
            </div>
            <div className={"col "}>
                <a href="#">
                    <div className={"card border-light " + classes.cardWrapper} style={{borderRadius:'15px'}}>
                        <img src={paintsImage} className={"card-img-top " + classes.cardImage}/>
                        <div className={"card-body " + classes.cardBody}>
                            <p className={"card-text " + classes.cardSpan}>Краски</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className={"col "}>
                <a href="#">
                    <div className={"card border-light " + classes.cardWrapper} style={{borderRadius:'15px'}}>
                        <img src={acsessuarsImage} className={"card-img-top " + classes.cardImage}/>
                        <div className={"card-body " + classes.cardBody}>
                            <p className={"card-text " + classes.cardSpan}>Акксесуары для игр</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        </div>
        // </div>
    )
    
}

export default MainCatalog