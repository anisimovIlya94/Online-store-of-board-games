import React, { useEffect, useState } from 'react';
import classes from "../modules/catalog.module.css"
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
// import { getCategoryNameById } from '../fakeAPI/categories';
// import { getSubCategoryNameById } from '../fakeAPI/subcategories';
import { useCategory } from './hooks/useCategory';
// import { useCatalog } from './hooks/useCatalog';


const Navigation = ({ productName }) => {
    const [names, setNames] = useState([])
    const history = useHistory();
    const path = useRouteMatch().url.split("/")
    const par = useParams()
    const {getCategoryById, getSubCategoryById, isLoading} = useCategory()
    useEffect(() => {
        if (!isLoading) {
            getArrayOfNames(path)
            }
    },[isLoading])
    const getArrayOfNames = (path) => {
            if (path[1] === "catalog") {
                const arrayOfNames = [{name: "Каталог", path: "/catalog"}]
                if (par.category) {
                    const categoryName = getCategoryById(par.category)
                    // console.log(categoryName)
                    arrayOfNames.push({name: categoryName.name, path: `/catalog/${par.category}`})
                }
                if (par.sub) {
                    const subName = getSubCategoryById(par.sub)
                    arrayOfNames.push({name: subName.name, path: `/catalog/${par.category}/${par.sub}`})
                } if (par.productId) {
                    arrayOfNames.push({name: productName, path: `/catalog/${par.category}/${par.sub}/${par.productId}`})
                }
                setNames(arrayOfNames) 
            } else if (path[1] === "shopping") {
                setNames([{name: "Корзина", path: "/shopping"}])
            } else if (path[1] === "persaccount") {
                const arrayOfNames = [{ name: "Личный кабинет", path: "/persaccount" }]
                if (par.accountPage === "orders") {
                    arrayOfNames.push({name: "Заказы", path: `/persaccount/${par.accountPage}`})
                }
                if (par.accountPage === "settings") {
                    arrayOfNames.push({name: "Настройки", path: `/persaccount/${par.accountPage}`})
                }
                setNames(arrayOfNames) 
            } else if (path[1] === "admin") {
                const arrayOfNames = [{ name: "Администрирование", path: "/admin" }]
                if (par.adminPage === "addProduct") {
                    arrayOfNames.push({name: "Добавление товара", path: `/admin/${par.adminPage}`})
                }
                if (par.adminPage === "recommendationsSettings") {
                    arrayOfNames.push({name: "Настройки рекомендаций", path: `/admin/${par.adminPage}`})
                }
                setNames(arrayOfNames) 
            }
        
    }
    const handleReturnMain = () => {
        history.replace("/")
    }
    const arrow = ">"
        return (
            <ul className='navigation-flex'>
                <li><a onClick={handleReturnMain} className={classes.navigation} href="">Главная</a></li>
                <li className='navigation-button'>{arrow}</li>
                {names.length > 0 && names.map((param, index) => {
                    const isLastIndex = index + 1 === names.length;
                    if (param) {
                        return (
                            <div className='d-flex' key={param.name + "11"}>
                                <Link to={param.path} className={isLastIndex ? classes.navigationDisabled : classes.navigation} style={{cursor: (isLastIndex ? 'default' : 'cursor' )}}>{param.name}</Link>
                            <li className='navigation-button'>{isLastIndex ? "" : arrow}</li>
                            </div>
                        )
                    }
                })}
            </ul>
        );  
}
 
export default Navigation;