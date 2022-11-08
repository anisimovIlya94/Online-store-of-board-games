import React, { useState } from "react";
import classes from "../../modules/main.module.css";
import MainCardButton from "./buttons/mainCardButton";
import { useShopping } from "../hooks/useShopping";
import { useHistory } from "react-router-dom";

const MainCard = ({cardInformation}) => {
  const [hoverButton, setHoverButton] = useState(false);
  const history = useHistory();
  const toggleHoverButton = () => {
    setHoverButton(!hoverButton);
  };
    const { updateCartItems } = useShopping();
  //   const handleRemove = () => {
  //       updateCartItems(cardInfo);
  // }
  const handleGetToProductCard = () => {
    history.push(`/catalog/${cardInformation.categories[0]}/${cardInformation.subcategories[0]}/${cardInformation._id}`)
  }
  return (
    <div
      className={"card border-light " + classes.mainCardWrapper}
      style={{ borderRadius: "15px" }}
    >
      <img src={require(`../../images/product/productsLibrary/${cardInformation._id}/${cardInformation.images[0].link}`)} className={"card-img-top " + classes.imageSize} alt="..." />
      <div className="card-body">
        <a href="" className={classes.productLinkStyle} onClick={handleGetToProductCard}>
          <h5 className={classes.mainCardTitle}>
          {cardInformation.name}
          </h5>
        </a>
        <p className={classes.mainCardPrice}>{cardInformation.currentPrice} ₽</p>
        <MainCardButton
          title={"В корзину"}
          orange={true}
          onHoverButton={toggleHoverButton}
          hoverButton={hoverButton}
          icon={true}
          // onShopCart={handleRemove}
        />
        <MainCardButton title={"Купить в один клик"} orange={false} />
      </div>
    </div>
  );
};

export default MainCard;
