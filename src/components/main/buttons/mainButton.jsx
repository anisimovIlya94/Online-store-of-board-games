import React from 'react'
import { useHistory } from 'react-router-dom';
import classes from "../../../modules/main.module.css"

const MainButton = ({ title }) => {
    const history = useHistory()
    const handleToCatalog = () => {
        history.push("/catalog")
    }
    return (
        <div className={classes.buttonMargin}>
        <div className={classes.buttonWrapper}>
            <a onClick={handleToCatalog} href="">
            <span className={classes.buttonSpan}>{title}</span>
        </a>
        </div>
        </div>
    );
}
 
export default MainButton;