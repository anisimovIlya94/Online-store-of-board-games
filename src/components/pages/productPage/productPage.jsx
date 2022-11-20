import React, { useState, useEffect } from "react";
import classes from "../../../modules/product.module.css";
import Navigation from "../../navigation";
import HorisontalSlider from "../../product/horisontalSlider";
import VerticalSlider from "../../product/verticalSlider";
import usersQuantityImage from "../../../images/product/usersQuantity.svg";
import productTimeImage from "../../../images/product/product-time.svg";
import MainCardButton from "../../main/buttons/mainCardButton";
import Quastion from "../../catalog/quastion";
import ProductInfo from "../../product/productInfo";
import Slick from "../../main/slick";
import { useCatalog } from "../../hooks/useCatalog";
import { useParams } from "react-router-dom";
import { useShopping } from "../../hooks/useShopping";
import { useAuth } from "../../hooks/useAuth";

const ProductPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverButton, setHoverButton] = useState(false);
  const { getProductById, getProductsByCategory } = useCatalog()
  const { updateUserData, currentUser, isLoading } = useAuth()
  const toggleHoverButton = () => {
    setHoverButton(!hoverButton);
  };
  const {productId} = useParams()
  const handleChangeIndex = (id) => {
    setActiveIndex(id);
  };
  const handleAddToViewed = () => {
    const viewedArray = currentUser.viewed.includes("") ? currentUser.viewed.slice(1, 0) : currentUser.viewed
    if (!viewedArray.includes(productId)) {
      if (viewedArray.length < 10) {
        updateUserData({ ...currentUser, viewed: [productId, ...viewedArray] })
      } else {
        updateUserData({ ...currentUser, viewed: [productId, ...viewedArray.slice(0,viewedArray.length-1)] })
      }
    }
  }
  useEffect(() => {
    if (!isLoading) {
      handleAddToViewed()
    }
  },[isLoading])
  const { getItemById } = useShopping()
  const isInCart = getItemById(productId)
  const product = getProductById(productId)
  const handleAddToCart = () => {
    if (!isInCart && currentUser) {
      updateUserData({...currentUser,shoppingCart: [...currentUser.shoppingCart, productId]})
    }
      
  }
  const viewedProducts = currentUser.viewed.map((prod) => {
    return getProductById(prod)
  })
  if (!product) {
    return "Loading..."
  }
  return (
    <div className={classes.productWrapper}>
      <>
        <div className={classes.productNavigation}>
          <Navigation productName={product.name}/>
        </div>
        <h2 className={classes.productTitle}>{product.name}</h2>
        <div style={{ display: "flex" }}>
          <VerticalSlider
            id={product._id}
            images={product.images}
            activeIndex={activeIndex}
            onChangeIndex={handleChangeIndex}
          />
          <HorisontalSlider
            id={product._id}
            images={product.images}
            activeIndex={activeIndex}
            onChangeIndex={handleChangeIndex}
          />
          <div className={classes.productCardWrapper}>
            <p className={classes.codeText}>Код товара: {product.code}</p>
            <div className={product.quantity ? classes.cardInfo : classes.cardInfoRight}>
              {product.quantity && <div>
                <img src={usersQuantityImage} alt="" />
                <span className={classes.cardText + " " + classes.quantity}>
                  {product.quantity.min} - {product.quantity.max}
                </span>
              </div>}
              {product.time && <div>
                <img src={productTimeImage} alt="" />
                <span className={classes.cardText + " " + classes.time}>
                  {product.time.min} - {product.time.max} минут
                </span>
              </div>}
              <div>
                <span className={classes.age}>{product.age}+</span>
              </div>
            </div>
            {product.bigPrice && <h2 className={classes.bigPrice}>{product.bigPrice} ₽</h2>}
            <h2 className={classes.currentPrice}>{product.currentPrice} ₽</h2>
            <MainCardButton
              title={isInCart ? "В корзине" : "В корзину"}
              orange={isInCart ? false : true}
              onHoverButton={toggleHoverButton}
              onShopCart={handleAddToCart}
              hoverButton={hoverButton}
              icon={true}
            />
            <MainCardButton title={"Купить в один клик"} orange={false} />
            <div className={classes.quastionsWrapper}>
              <Quastion
                type="product"
                title="Доставка"
                text={
                  <>
                    <p className={classes.quastiosList}>
                      Самовывоз из магазина: сегодня
                    </p>
                    <p className={classes.quastiosList}>
                      Самовывоз из 761 пункта: 1-3 дня
                    </p>
                    <p className={classes.quastiosList}>
                      Курьерская доставка: 1-3 дня
                    </p>
                    <p className={classes.quastiosList}>
                      Доставка почтой: от 3 дней
                    </p>
                  </>
                }
              />
              <Quastion
                type="product"
                title="Оплата"
                text={
                  <>
                    <p className={classes.quastiosList}>
                      Самовывоз из магазина: сегодня
                    </p>
                    <p className={classes.quastiosList}>
                      Самовывоз из 761 пункта: 1-3 дня
                    </p>
                    <p className={classes.quastiosList}>
                      Курьерская доставка: 1-3 дня
                    </p>
                    <p className={classes.quastiosList}>
                      Доставка почтой: от 3 дней
                    </p>
                  </>
                }
              />
            </div>
            <button className={classes.quastionButton}>
              Задать вопрос
            </button>
          </div>
        </div>
        <ProductInfo description={product.description || product.name}/>
       { <div className={classes.slickWrapper}>
          <h2 className={classes.slickTitles}>C этим товаром покупают</h2>
          <Slick cards={getProductsByCategory(product.categories[0], "categories", true, product._id)}/>
        </div>}
        <div className={classes.slickWrapper}>
          <h2 className={classes.slickTitles}>Просматривали</h2>
          <Slick cards={viewedProducts}/>
        </div>
      </>
    </div>
  );
};

export default ProductPage;
