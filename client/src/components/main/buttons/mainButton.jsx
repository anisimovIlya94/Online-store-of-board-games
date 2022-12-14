import React from 'react'
import { Link } from 'react-router-dom';
import classes from "../../../modules/main.module.css"

const MainButton = ({ title }) => {
    return (
        <div className={classes.buttonMargin}>
        <div className={classes.buttonWrapper}>
            <Link to={"/catalog"}>
            <span className={classes.buttonSpan}>{title}</span>
        </Link>
        </div>
        </div>
    );
}
 
export default MainButton;