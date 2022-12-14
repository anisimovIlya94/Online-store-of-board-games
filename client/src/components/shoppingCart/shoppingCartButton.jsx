import React from 'react';
import whiteCart from "../../images/catalog/clarity_shopping-cart-line.png"
import orangeCart from "../../images/catalog/clarity_shopping-cart-line-orange.png"
import classes from "../../modules/shoppingCart.module.css"

const ShoppingCardButton = ({ title, orange, onHoverButton, hoverButton, icon, onClick, buttonWidth, modal, disabled, background, ...rest }) => {
    return (
        <div className={classes.buttonWrapperAllWidth}>
        <button id="liveToastBtn" disabled={disabled} type="button" style={{backgroundColor: background ? background : "#FFFF", width:'100%'}} onClick={onClick} data-bs-dismiss={modal ? "modal" : null}>
            <span style={buttonWidth ? { width: buttonWidth} : null} onMouseEnter={onHoverButton} onMouseLeave={onHoverButton} className={orange ? (disabled ? classes.buttonOrangeDisabled : classes.buttonOrange) : classes.buttonWhite}>
                {title}
                {icon && orange && <img style={{margin: "0 0 0 10px"}} src={hoverButton ? orangeCart : whiteCart} alt="" />}
                </span>
        </button>
        </div> 
     );
     
}
 
export default ShoppingCardButton;