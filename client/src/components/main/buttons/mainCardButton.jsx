import React from "react";
import whiteCart from "../../../images/catalog/clarity_shopping-cart-line.png";
import orangeCart from "../../../images/catalog/clarity_shopping-cart-line-orange.png";
import classes from "../../../modules/mainButtons.module.css";

const MainCardButton = ({
  title,
  orange,
  onHoverButton,
  hoverButton,
  icon,
  onShopCart,
  back,
  ancer,
}) => {
  return (
    <div onClick={onShopCart} className={classes.buttonWrapper}>
      {ancer ? (
        <a href="/shopping">
          <span
            onMouseEnter={onHoverButton}
            onMouseLeave={onHoverButton}
            className={classes.buttonWhite}
          >
            {title}
          </span>
        </a>
      ) : (
        <button style={{ backgroundColor: back, width: "100%" }} href="">
          <span
            onMouseEnter={onHoverButton}
            onMouseLeave={onHoverButton}
            className={orange ? classes.buttonOrange : classes.buttonWhite}
          >
            {title}
            {icon && orange && (
              <img
                style={{ margin: "0 0 0 10px" }}
                src={hoverButton ? orangeCart : whiteCart}
                alt=""
              />
            )}
          </span>
        </button>
      )}
    </div>
  );
};
MainCardButton.defaultProps = {
  back: "#FFFFFF",
};
export default MainCardButton;
