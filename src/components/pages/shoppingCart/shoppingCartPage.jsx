import React, { useState, useEffect } from "react";
import Navigation from "../../navigation";
import ShoppingCartItem from "../../shoppingCart/shoppingCartItem";
import classes from "../../../modules/shoppingCart.module.css";
import ShoppingCardButton from "../../shoppingCart/shoppingCartButton";
import { useShopping } from "../../hooks/useShopping";
import { useHistory } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems: cartsList, promos, removeItem } = useShopping();
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const history = useHistory();
  const initData = cartsList.map((cart) => {
    return { name: cart.name, price: cart.currentPrice };
  });
  const [allPrice, setAllPrice] = useState(initData);
  const [hoverButton, setHoverButton] = useState(false);
  const toggleHoverButton = () => {
    setHoverButton(!hoverButton);
  };
  const handleChangePrice = (name, price) => {
    setAllPrice((prevState) =>
      prevState.map((order) => {
        if (order.name === name) {
          return { ...order, price: price };
        }
        return order;
      })
    );
  };
  const handleChangePromo = (e) => {
    // setError("")
    // setPromo(e.target.value)
  };
  // const handleSubmitPromo = () => {
  //     if(!promos.includes(promo)){
  //         setError("Промокод не действителен")
  //     } else {
  //         console.log("Success!")
  //     }
  // }
  const handleSubmitBuying = () => {
    console.log(prices);
    };
    const handleReturnToMain = () => {
        history.push("/")
    }
  const prices = allPrice.reduce((acc, order) => {
    return (acc += order.price);
  }, 0);
  // useEffect(()=>{
  //     console.log(allPrice)
  // },[allPrice])
  return (
    <div style={{ padding: "148px 0 85px 10px" }}>
      <Navigation />
      <h2 className={classes.title}>Корзина</h2>
      <div className="d-flex ">
        <div>
          {cartsList.map((cart) => {
            return (
              <ShoppingCartItem
                key={cart.id}
                onChangeAllPrice={handleChangePrice}
                cart={cart}
              />
            );
          })}
        </div>
        {cartsList.length > 0 ? (
          <div className={classes.buyingWrapper}>
            <p className={classes.buyingSum}>
              Сумма: <span className={classes.buyingSpan}>{prices} ₽</span>
            </p>
            <label className={classes.buyingLabel} htmlFor="">
              Промокод:
            </label>
            <div className={classes.buyingInputWrapper}>
              <input className={classes.buyingInput} type="text" />
              <button className={classes.buyingInputButton}>
                <i className="bi bi-check-lg"></i>
              </button>
            </div>
            <ShoppingCardButton
              onClick={handleSubmitBuying}
              title="Оформить заказ"
              orange={true}
              onHoverButton={toggleHoverButton}
              hoverButton={hoverButton}
              icon={false}
            />
            <ShoppingCardButton
              onClick={handleSubmitBuying}
              title="Купить в один клик"
              orange={false}
            />
            {error && <p className={classes.error}>{error}</p>}
          </div>
        ) : (
          <div className={classes.emptyCartWrapper}>
            <div className={classes.emptyCartImage}>
              <i class="bi bi-cart4"></i>
            </div>
            <p className={classes.emptyCartTitle}>Ваша корзина пуста</p>
            <a href="" onClick={handleReturnToMain}>
              <span className={classes.emptyCartLink}>Нажмите здесь</span>
            </a>
            <span className={classes.emptyCartText}>, чтобы продолжить покупки</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
