import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';


const Navigation = () => {
    const history = useHistory();
    const params = window.location.href.slice(22).split("/")
    const namesOfLinks = {
        catalog: {name: "Каталог", linkto: "/catalog", id:"nav1"},
        shopping: {name: "Корзина", linkto: "/shopping",id:"nav2"},
        edit: {name: "Edit", linkto: "/",id:"nav3"},
        ad2: { name: "Wharhammer", linkto: "/catalog/ad2", id: "nav4" },
        persaccount: { name: "Личный кабинет", linkto: "/persaccount", id: "nav5" },
        orders: { name: "Мои заказы", linkto: "/persaccount/orders", id: "nav6" },
        settings: { name: "Персональные данные", linkto: "/persaccount/settings", id: "nav7" },
    }
    const handleReturn = (e) => {
        
        // e.preventDefault()
        // console.log(namesOfLinks[name].linkto)
        history.replace(namesOfLinks[e.target.name].linkto)
    }
    const handleReturnMain = () => {
        history.replace("/")
    }
    const arrow = ">"
    return (
        <ul className='navigation-flex'>
            <li><a onClick={handleReturnMain} className='navigation-button' href="">Главная</a></li>
            <li className='navigation-button'>{arrow}</li>
            {/* <li><button className='navigation-button disabled-button' style={{cursor: 'default'}} disabled href="">Каталог</button></li> */}
            {params.map((param,index)=>{
                const isLastIndex = index + 1 === params.length;
                // console.log(isLastIndex)
                if (namesOfLinks[param]) {
                    // console.log(param)
                    return (<div className='d-flex' key={param + "11"}>
                <a onClick={handleReturn} name={param} className={'navigation-button ' + (isLastIndex ? 'disabled-button' : "")} disabled style={{cursor: (isLastIndex ? 'default' : 'cursor' )}} href="">{namesOfLinks[param].name}</a>
                        <li className='navigation-button'>{isLastIndex ? "" : arrow}</li>
                        </div>)
                // </div>
                }
            })}
        </ul>
    );
}
 
export default Navigation;