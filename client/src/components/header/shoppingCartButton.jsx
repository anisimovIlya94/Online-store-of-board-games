import React from "react";
import classes from "../../modules/header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/user";

const ShoppingCartButton = () => {
  const currentUser = useSelector(getCurrentUser());
  let count = currentUser?.shoppingCart.length || 0;
  return (
    <Link to={"/shopping"} className={classes.shoppingCart}>
      <span className="position-relative">
        <span className={classes.cartIcon}>
          <i className="bi bi-cart3"></i>
        </span>
        <span className="position-absolute top--1 start-100 translate-middle badge rounded-pill bg-warning">
          {count}
        </span>
      </span>
    </Link>
  );
};

export default ShoppingCartButton;
