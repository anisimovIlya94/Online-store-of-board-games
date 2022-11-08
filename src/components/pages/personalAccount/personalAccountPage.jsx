import React from "react";
import { useHistory, useParams } from "react-router-dom";
import classes from "../../../modules/account.module.css";
import Navigation from "../../navigation";
import AccountMain from "../../personalAccount/accountMain";
import AccountOrders from "../../personalAccount/accountOrders";
import AccountSettings from "../../personalAccount/accountSettings";

const PersonalAccountPage = () => {
  const { accountPage } = useParams()
  // console.log(accountPage)
  const history = useHistory();
  const handleReturnToAccountPage = (page) => {
    history.push(`/persaccount${page}`)
  }
  return (
    <div className={classes.accountWrapper}>
      <Navigation />
      <h2 className={classes.title}>Личный кабинет</h2>
      <div className={classes.accountMainWrapper}>
        <div className={classes.accountMainNavigation}>
          <ul className={classes.accountMainNavList}>
            <li>
              <a href="" onClick={()=>handleReturnToAccountPage("")}
                
              >
                <span className={classes.accountMainNavButton + " " + (accountPage ? null : classes.active)}>Профиль</span>
                
              </a>
            </li>
            <li>
              <a href="" onClick={()=>handleReturnToAccountPage("/orders")} className={classes.accountMainNavButton}>
                <span className={classes.accountMainNavButton + " " + (accountPage !== "orders" ? null : classes.active)}>Заказы</span>
                
              </a>
            </li>
            <li>
              <button className={classes.accountMainNavButton}>
                Мероприятия
              </button>
            </li>
            <li>
            <a href="" onClick={()=>handleReturnToAccountPage("/settings")} className={classes.accountMainNavButton}>
                <span className={classes.accountMainNavButton + " " + (accountPage !== "settings" ? null : classes.active)}>Настройки</span>
                
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.accountRight}>
          {!accountPage && <AccountMain />}
          {accountPage === "orders" && <AccountOrders />}
          {accountPage === "settings" && <AccountSettings/>}
        </div>
        
        
      </div>
    </div>
  );
};

export default PersonalAccountPage;
