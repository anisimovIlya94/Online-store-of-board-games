import React, {useRef} from 'react';
import whiteCart from "../../images/catalog/clarity_shopping-cart-line.png"
import orangeCart from "../../images/catalog/clarity_shopping-cart-line-orange.png"
import classes from "../../modules/shoppingCart.module.css"
import { useAuth } from '../hooks/useAuth';

const ShoppingCardButton = ({ title, orange, onHoverButton, hoverButton, icon, onClick, buttonWidth, modal, disabled, background }) => {
    return (
        <div className={classes.buttonWrapperAllWidth}>
        <button disabled={disabled} type="button" style={{backgroundColor: background ? background : "#FFFF", width:'100%'}} onClick={onClick} href="" data-bs-dismiss={modal ? "modal" : null}>
            <span style={buttonWidth ? { width: buttonWidth} : null} onMouseEnter={onHoverButton} onMouseLeave={onHoverButton} className={orange ? (disabled ? classes.buttonOrangeDisabled : classes.buttonOrange) : classes.buttonWhite}>
                {title}
                {icon && orange && <img style={{margin: "0 0 0 10px"}} src={hoverButton ? orangeCart : whiteCart} alt="" />}
                </span>
        </button>
        </div> 
     );
     
}
 
export default ShoppingCardButton;