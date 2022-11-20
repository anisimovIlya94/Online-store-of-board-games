import React, { useEffect } from "react";
import MainWrapper from "../../main/mainWrapper";
import MainCatalog from "../../main/mainCatalog";
import MainButton from "../../main/buttons/mainButton";
import Slick from "../../main/slick";
import MainEvents from "../../main/mainEvents";
import { getBuying } from "../../../fakeAPI/products";
import InitializeData from "../../initializeMockData";
import { useRecomendations } from "../../hooks/useRecomendations";
import { useCatalog } from "../../hooks/useCatalog";

const MainPage = () => {
  const {
    timeToBuy,
    specialOffers,
    isLoading: recomendationsLoading,
  } = useRecomendations();
  const { getProductByCode, isLoading: productsLoading } = useCatalog();
  const getTimeToBuingProducts = () => {
    return timeToBuy.map((code) => {
      return getProductByCode(code.value);
    });
  };
  const getSpecialOffersProducts = () => {
    return specialOffers.map((code) => {
      return getProductByCode(code.value);
    });
  };
  useEffect(() => {
    console.log(getTimeToBuingProducts());
    console.log(getSpecialOffersProducts());
  }, [productsLoading]);
  const bying = getBuying();
  return (
    <div style={{ padding: "0 0 85px 0" }}>
      <MainWrapper title="Каталог" marginTop="190px">
        <MainCatalog />
      </MainWrapper>
      <MainButton title="Весь каталог" />
      { !productsLoading && !recomendationsLoading &&
        <>
          <MainWrapper title="Успей купить" marginTop="110px">
            <Slick cards={getTimeToBuingProducts()} />
          </MainWrapper>
          <MainWrapper title="Специальные предложения" marginTop="110px">
            <Slick cards={getSpecialOffersProducts()} />
          </MainWrapper>
        </>
      }
      <MainWrapper title="Ближайшие мероприятия" marginTop="110px">
        <MainEvents />
      </MainWrapper>
      <InitializeData />
    </div>
  );
};

export default MainPage;
