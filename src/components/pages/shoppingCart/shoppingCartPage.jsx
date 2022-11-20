import React, { useState, useEffect } from "react";
import Navigation from "../../navigation";
import ShoppingCartItem from "../../shoppingCart/shoppingCartItem";
import classes from "../../../modules/shoppingCart.module.css";
import ShoppingCardButton from "../../shoppingCart/shoppingCartButton";
// import { useShopping } from "../../hooks/useShopping";
import { useHistory } from "react-router-dom";
import { useShopping } from "../../hooks/useShopping";
import { useAuth } from "../../hooks/useAuth";
// import { useAuth } from "../../hooks/useAuth";
// import { useCatalog } from "../../hooks/useCatalog";

const ShoppingCart = () => {
  // const { cartItems: cartsList, promos, removeItem } = useShopping();
  // const [cartItems, setCartItems] = useState([])
  // const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState("");
  // const [data, setData] = useState({});
  // const [allPrice, setAllPrice] = useState([]);
  // const { currentUser } = useAuth()
  const history = useHistory();
  const { cartItems,
    isLoading,
    resultPrice } = useShopping()
  // const isLoading = true
  const {currentUser} = useAuth()
  // const { getProductById, isLoading } = useCatalog()
  // const handleGetItems = () => {
  //   const cart = currentUser.shoppingCart.filter((product) => {
  //     return product !== ""
  //   })
  //   const init = cart.map((prod) => {
  //     if (prod) {
  //       return getProductById(prod)
  //     }
  //   })
  //   // return init
  //   setCartItems(init)
  //   // setLoading(false)
  // }
  // useEffect(() => {
  //   if (!isLoading) {
  //     handleGetItems()
  //   }
  // }, [isLoading])
  // const initData = cartItems.map((cart) => {
  //   return { name: cart.name, price: cart.currentPrice };
  // });
  // useEffect(() => {
  //   setAllPrice(initData)
  // },[initData])
  const [hoverButton, setHoverButton] = useState(false);
  const toggleHoverButton = () => {
    setHoverButton(!hoverButton);
  };
  // useEffect(() => {
  //   console.log(cartItems)
  //   console.log(isLoading)
  // },[cartItems])
  // const handleChangePrice = (name, price) => {
  //   setAllPrice((prevState) =>
  //     prevState.map((order) => {
  //       if (order.name === name) {
  //         return { ...order, price: price };
  //       }
  //       return order;
  //     })
  //   );
  // };
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
    console.log(resultPrice);
    };
    const handleReturnToMain = () => {
        history.push("/")
    }
  // const prices = allPrice.reduce((acc, order) => {
  //   return (acc += order.price);
  // }, 0);
  // useEffect(()=>{
  //     console.log(allPrice)
  // },[allPrice])
  return (
    <div style={{ padding: "148px 0 85px 10px" }}>
      <Navigation />
      <h2 className={classes.title}>Корзина</h2>
      <div className="d-flex ">
          {isLoading && currentUser
            ? <div className={classes.loading}>
            <div style={{width: "5rem", height: "5rem"}} className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
              </div>
              </div>
          : <div>
            {cartItems.map((cart) => {
              return (
              <ShoppingCartItem
                key={cart._id}
                cart={cart}
              />
            );
          })}
          </div>
            }
        
        {cartItems.length > 0 && (
          <div className={classes.buyingWrapper}>
            <p className={classes.buyingSum}>
              Сумма: <span className={classes.buyingSpan}>{resultPrice} ₽</span>
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
        )}
        {((cartItems.length === 0 && !isLoading) || !currentUser) &&(
          <div className={classes.emptyCartWrapper}>
            <div className={classes.emptyCartImage}>
              <i className="bi bi-cart4"></i>
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
