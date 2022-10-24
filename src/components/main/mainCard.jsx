import React, { useState } from "react";
import classes from "../../modules/main.module.css";
import MainCardButton from "./buttons/mainCardButton";
import { useShopping } from "../hooks/useShopping";
import { useHistory } from "react-router-dom";

const MainCard = () => {
  const [hoverButton, setHoverButton] = useState(false);
  const history = useHistory();
  const toggleHoverButton = () => {
    setHoverButton(!hoverButton);
  };
    const { updateCartItems } = useShopping();
  const cardInfo = {
    src: "warhammer-card.jpg",
    label: "Wharhammer40,000: Craftworlds Farseer",
    name: "Wharhammer",
    currentPrice: 5990,
    bigPrice: 6490,
    id: "ad2",
    };
    const handleRemove = () => {
        updateCartItems(cardInfo);
  }
  const handleGetToProductCard = () => {
    history.push(`/catalog/${cardInfo.id}`)
  }
  return (
    <div
      className={"card border-light " + classes.mainCardWrapper}
      style={{ borderRadius: "15px" }}
    >
      <img src={require(`../../images/catalog/${cardInfo.src}`)} className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="" onClick={handleGetToProductCard}>
          <h5 className={classes.mainCardTitle}>
            {cardInfo.label}
          </h5>
        </a>
        <p className={classes.mainCardPrice}>{cardInfo.currentPrice} ₽</p>
        <MainCardButton
          title={"В корзину"}
          orange={true}
          onHoverButton={toggleHoverButton}
          hoverButton={hoverButton}
          icon={true}
          onShopCart={handleRemove}
        />
        <MainCardButton title={"Купить в один клик"} orange={false} />
      </div>
    </div>
  );
};

export default MainCard;
