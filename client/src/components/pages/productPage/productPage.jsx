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
import { useHistory, useParams } from "react-router-dom";
import { useShopping } from "../../hooks/useShopping";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUser,
  getLoadingStatus,
  updateUser,
} from "../../../store/user";
import {
  getCatalogLoadingStatus,
  getProductsRedux,
} from "../../../store/catalog";

const ProductPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverButton, setHoverButton] = useState(false);
  const products = useSelector(getProductsRedux());
  const currentUser = useSelector(getCurrentUser());
  const isLoading = useSelector(getLoadingStatus());
  const history = useHistory()
  const productsLoading = useSelector(getCatalogLoadingStatus());
  const dispatch = useDispatch();
  const { productId } = useParams();

  const getProductById = (id) => {
    if (!productsLoading) {
      return products.find((prod) => prod._id === id);
    } else {
      return null;
    }
  };

  const getProductsByCategory = (categoryId, categoryName, prodId) => {
    if (!productsLoading) {
      const array = products.filter((prod) => {
        return prod[categoryName].includes(categoryId);
      });
      return array.filter((prod) => prod._id !== prodId).slice(0, 7);
    } else {
      return null;
    }
  };

  const toggleHoverButton = () => {
    setHoverButton(!hoverButton);
  };
  const handleChangeIndex = (id) => {
    setActiveIndex(id);
  };
  const handleGoToCart = () => {
    window.scrollTo(0,0)
    history.replace("/shopping")
  }
  const handleAddToViewed = () => {
    const viewedArray = currentUser.viewed
    if (!viewedArray.includes(productId)) {
      if (viewedArray.length < 10) {
        dispatch(
          updateUser({ ...currentUser, viewed: [productId, ...viewedArray] })
        );
        // updateUserData({ ...currentUser, viewed: [productId, ...viewedArray] })
      } else {
        dispatch(
          updateUser({
            ...currentUser,
            viewed: [
              productId,
              ...viewedArray.slice(0, viewedArray.length - 1),
            ],
          })
        );
        // updateUserData({ ...currentUser, viewed: [productId, ...viewedArray.slice(0,viewedArray.length-1)] })
      }
    } else {
      const filteredViewed = viewedArray.filter((v) => v !== productId)
      dispatch(
        updateUser({ ...currentUser, viewed: [productId, ...filteredViewed] })
      );
    }
  };
  useEffect(() => {
    if (currentUser && !isLoading) {
      handleAddToViewed();
    }
  }, [isLoading]);
  const { getItemById } = useShopping();
  const isInCart = getItemById(productId);
  const product = getProductById(productId);
  const handleAddToCart = () => {
    if (!isInCart && currentUser) {
      dispatch(
        updateUser({
          ...currentUser,
          shoppingCart: [...currentUser.shoppingCart, productId],
        })
      );
      // updateUserData({...currentUser,shoppingCart: [...currentUser.shoppingCart, productId]})
    }
  };
  const viewedProducts =
    currentUser && product
      ? currentUser.viewed.map((prod) => {
          return getProductById(prod);
        })
      : [];
  if (productsLoading) {
    return (
        <div className={"d-flex justify-content-center " + classes.load}>
          <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    );
  }
  return (
    !productsLoading && (
      <div className={classes.productWrapper}>
        <>
          <div className={classes.productNavigation}>
            <Navigation productName={product.name} />
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
              <div
                className={
                  product.quantity ? classes.cardInfo : classes.cardInfoRight
                }
              >
                {product.quantity && (
                  <div>
                    <img src={usersQuantityImage} alt="" />
                    <span className={classes.cardText + " " + classes.quantity}>
                      {product.quantity.min} - {product.quantity.max}
                    </span>
                  </div>
                )}
                {product.time && (
                  <div>
                    <img src={productTimeImage} alt="" />
                    <span className={classes.cardText + " " + classes.time}>
                      {product.time.min} - {product.time.max} минут
                    </span>
                  </div>
                )}
                <div>
                  <span className={classes.age}>{product.age}+</span>
                </div>
              </div>
              {product.bigPrice && (
                <h2 className={classes.bigPrice}>{product.bigPrice} ₽</h2>
              )}
              <h2 className={classes.currentPrice}>{product.currentPrice} ₽</h2>
              {isInCart
                ? <MainCardButton
                title={"В корзине"}
                ancer={true}
                onHoverButton={toggleHoverButton}
                hoverButton={hoverButton}
                />
                : <MainCardButton
                title={"В корзину"}
                orange={true}
                onHoverButton={toggleHoverButton}
                onShopCart={handleAddToCart}
                hoverButton={hoverButton}
                icon={true}
              />
            }
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
              <button className={classes.quastionButton}>Задать вопрос</button>
            </div>
          </div>
          <ProductInfo description={product.description || product.name} />
          {
            <div className={classes.slickWrapper}>
              <h2 className={classes.slickTitles}>C этим товаром покупают</h2>
              <Slick
                cards={getProductsByCategory(
                  product.categories[0],
                  "categories",
                  product._id
                )}
              />
            </div>
          }
          {currentUser && !isLoading && (
            <div className={classes.slickWrapper}>
              <h2 className={classes.slickTitles}>Просматривали</h2>
              <Slick cards={viewedProducts} />
            </div>
          )}
        </>
      </div>
    )
  );
};

export default ProductPage;
