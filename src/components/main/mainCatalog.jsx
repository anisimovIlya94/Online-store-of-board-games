import React from "react";
import warGameImage from "../../images/main/WarGames.png"
import paintsImage from "../../images/main/paints.png"
import acsessuarsImage from "../../images/main/acsessuars.jpg"
import magicImage from "../../images/main/magic.png"
import boardGames from "../../images/main/Games.jpg"
import { Link } from "react-router-dom";
import classes from "../../modules/main.module.css"
import categories from "../../fakeAPI/categories";

const MainCatalog = () => {

    return(
        <div className={"d-flex " + classes.flex}>
                <Link to="/catalog/cpTsuR96uA23cdM-mrghU001">
                    <div className={"card border-light " + classes.bigCardWrapper} style={{borderRadius:'15px'}}>
                        <img src={boardGames} className={"card-img-top " + classes.cardImage}/>
                        <div className={"card-body " + classes.cardBody}>
                            <p className={"card-text " + classes.cardSpan}>Настольные игры</p>
                        </div>
                    </div>
                </Link>
        <div className={"row row-cols-1 row-cols-md-2 g-4 " + classes.cardGrid}>
            <div className={"col "}>
                <Link to="/catalog/cpTsuR96uA23cdM-mrghU002">
                <div className={"card border-light " + classes.cardWrapper} style={{borderRadius:'15px'}}>
                    <img src={magicImage} className={"card-img-top " + classes.cardImage}/>
                    <div className={"card-body " + classes.cardBody}>
                        <p className={"card-text " + classes.cardSpan}>Magic: The Gathering</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className={"col "}>
                <Link to="/catalog/cpTsuR96uA23cdM-mrghU003">
                <div className={"card border-light " + classes.cardWrapper} style={{borderRadius:'15px'}}>
                    <img src={warGameImage} className={"card-img-top " + classes.cardImage}/>
                    <div className={"card-body " + classes.cardBody}>
                        <p className={"card-text " + classes.cardSpan}>Варгеймы</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className={"col "}>
                <Link to="/catalog/cpTsuR96uA23cdM-mrghU004">
                    <div className={"card border-light " + classes.cardWrapper} style={{borderRadius:'15px'}}>
                        <img src={paintsImage} className={"card-img-top " + classes.cardImage}/>
                        <div className={"card-body " + classes.cardBody}>
                            <p className={"card-text " + classes.cardSpan}>Краски</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={"col "}>
                <Link to="/catalog/cpTsuR96uA23cdM-mrghU005">
                    <div className={"card border-light " + classes.cardWrapper} style={{borderRadius:'15px'}}>
                        <img src={acsessuarsImage} className={"card-img-top " + classes.cardImage}/>
                        <div className={"card-body " + classes.cardBody}>
                            <p className={"card-text " + classes.cardSpan}>Акксесуары для игр</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        </div>
    )
    
}

export default MainCatalog