import React from "react"
import MainWrapper from "../../main/mainWrapper"
import MainCatalog from "../../main/mainCatalog"
import MainButton from "../../main/buttons/mainButton"
import Slick from "../../main/slick"
import MainEvents from "../../main/mainEvents"

const MainPage = () => {
    return (
            <div style={{padding: "0 0 85px 0"}}>
                <MainWrapper title="Каталог" marginTop="190px">
                    <MainCatalog/>
                </MainWrapper>
                <MainButton title="Весь каталог"/>
                <MainWrapper title="Успей купить" marginTop="110px">
                <Slick/>
                </MainWrapper>
                <MainWrapper title="Специальные предложения" marginTop="110px">
                <Slick/>
                </MainWrapper>
                <MainWrapper title="Ближайшие мероприятия" marginTop="110px">
                <MainEvents/>
                </MainWrapper>
            </div>
         )
} 

export default MainPage