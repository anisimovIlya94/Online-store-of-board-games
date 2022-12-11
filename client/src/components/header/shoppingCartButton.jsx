import React from "react";
import cartIcon from "../../images/header/shopping-cart.png";
import cartIconActive from "../../images/header/shopping-cart-active.png";
import classes from "../../modules/header.module.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/user";

const ShoppingCartButton = ({ onHover, cart }) => {
  const currentUser = useSelector(getCurrentUser());
  let count;
  if (currentUser) {
    count = currentUser.shoppingCart.length || 0;
  } else {
    count = 0;
  }
  const history = useHistory();
  const handleClick = () => {
    history.replace("/shopping");
  };
  return (
    <a className={classes.shoppingCart} onClick={handleClick} href="">
      <span className="position-relative">
        {/* <img src={cart ? cartIconActive : cartIcon} onMouseEnter={()=>onHover()} onMouseLeave={()=>onHover()} alt="" /> */}
        <span className={classes.cartIcon}>
          <i className="bi bi-cart3"></i>
        </span>
        <span className="position-absolute top--1 start-100 translate-middle badge rounded-pill bg-warning">
          {count}
        </span>
      </span>
    </a>
  );
};

export default ShoppingCartButton;
