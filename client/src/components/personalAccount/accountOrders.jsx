import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from "../../modules/account.module.css"

const AccountOrders = () => {
    const history = useHistory();
    const handleReturnToCatalog = () => {
        // history.push('/catalog');
    }
    return ( 
        <div>
            <h2 className={classes.ordersTitle}>Текущие заказы не найдены</h2>
            <a onClick={handleReturnToCatalog} href="">
                <span className={classes.ordersLinkToCatalog}>Перейти в каталог</span>
            </a>
        </div>
     );
}
 
export default AccountOrders;