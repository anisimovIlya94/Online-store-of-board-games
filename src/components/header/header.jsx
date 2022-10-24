import React, { useState, useEffect } from "react";
import classes from "../../modules/header.module.css";
import logo from "../../images/header/header-logo.png";
import magnifier from "../../images/header/Vector.png";
import telephone from "../../images/header/telephone.png";
import personalAccount from "../../images/header/account.png";
import personalAccountActive from "../../images/header/account-active.png";
import ShoppingCartButton from "./shoppingCartButton";
import NavBar from "./navBar";
import { useHistory } from "react-router-dom";

const Header = ({ onToggleCatalog }) => {
  const [account, setAccount] = useState(false);
  const [cart, setCart] = useState(false);
  const [burger, setBurger] = useState(false);
  const history = useHistory();
  const handleToggleAccount = () => {
    setAccount(!account);
  };
  const handleToggleCart = () => {
    setCart(!cart);
  };
  const handleToggleBurger = () => {
    setBurger(!burger);
  };
  const handleReturnToMain = () => {
    history.replace("/");
  };
   const handleGoingToAccount = () => {
     history.replace("/persaccount")
  };
  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.hat}>
          <div className="container text-center mw-100">
            <div className="row justify-content-between">
              <div className="col">
                <a onClick={handleReturnToMain} href="">
                  {" "}
                  <img className={classes.image} src={logo} alt="#" />
                </a>
              </div>
              <div className="col ">
                <div className={classes.search}>
                  <input
                    className={classes.input}
                    type="text"
                    placeholder="Найти игру"
                  />
                  <button className={classes.magnifier}>
                    <img src={magnifier} alt="" />
                  </button>
                </div>
              </div>
              <div className="col d-flex">
                <img className={classes.telephone} src={telephone} alt="" />
                <p className={classes.telephoneNumber}>+7 (495) 911-10-11</p>
              </div>
              <div className="col">
                <a href="" onClick={handleGoingToAccount} className={classes.personalAccount}>
                  <img
                    src={account ? personalAccountActive : personalAccount}
                    onMouseEnter={() => handleToggleAccount()}
                    onMouseLeave={() => handleToggleAccount()}
                    alt=""
                  />
                </a>
                <ShoppingCartButton onHover={handleToggleCart} cart={cart} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar
        onHover={handleToggleBurger}
        burgerState={burger}
        onToggleCatalog={onToggleCatalog}
      />
    </div>
  );
};

export default Header;
