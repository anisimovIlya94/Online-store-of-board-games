import React, { useState } from "react";
import classes from "../../modules/shoppingCart.module.css";
import { useShopping } from "../hooks/useShopping";

const ShoppingCartItem = ({ cart, onChangeAllPrice }) => {
  const [count, setCount] = useState(1);
  const { removeItem } = useShopping();
  const handleChangeIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChangeAllPrice(cart.name, cart.currentPrice * newCount);
  };
  const handleChangeDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onChangeAllPrice(cart.name, cart.currentPrice * newCount);
    }
  };
  return (
    <li className={classes.order}>
      <img
        className={classes.orderImage}
        src={require(`../../images/catalog/${cart.src}`)}
        alt=""
      />
      <a href="" className={classes.orderName}>
        {cart.label}
      </a>
      <p
        className={
          cart.bigPrice ? classes.orderBigPrice : classes.orderBigPriceHiden
        }
      >
        {cart.bigPrice + "₽"}
      </p>
      <p className={classes.orderCurrentPtice}>{cart.currentPrice}₽</p>
      <div className={classes.countButtons}>
        <button className={classes.countButton} onClick={handleChangeDecrement}>
          -
        </button>
        <p className={classes.orderCount}>{count} шт</p>
        <button className={classes.countButton} onClick={handleChangeIncrement}>
          +
        </button>
      </div>
      <button
        onClick={() => removeItem(cart.id)}
        className={classes.deleteButton}
      >
        <i className="bi bi-trash3-fill"></i>
      </button>
    </li>
  );
};

export default ShoppingCartItem;
