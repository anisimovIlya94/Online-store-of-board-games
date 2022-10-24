import React from 'react';
import whiteCart from "../../images/catalog/clarity_shopping-cart-line.png"
import orangeCart from "../../images/catalog/clarity_shopping-cart-line-orange.png"
import classes from "../../modules/shoppingCart.module.css"

const shoppingCardButton = ({ title, orange, onHoverButton, hoverButton, icon, onClick }) => {
    return (
        <div className={classes.buttonWrapper}>
        <button style={{backgroundColor: "#FFFF"}} onClick={onClick} href="">
            <span onMouseEnter={onHoverButton} onMouseLeave={onHoverButton} className={orange ? classes.buttonOrange : classes.buttonWhite}>
                {title}
                {icon && orange && <img style={{margin: "0 0 0 10px"}} src={hoverButton ? orangeCart : whiteCart} alt="" />}
                </span>
            
        </button>
        </div> 
     );
     
}
 
export default shoppingCardButton;