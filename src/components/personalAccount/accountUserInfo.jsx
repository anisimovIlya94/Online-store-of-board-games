import React from 'react'
import classes from "../../modules/account.module.css"

const AccountUserInfo = () => {
    return ( <div>
        <img
          className={classes.accountPhoto}
          src={require("../../images/account/account-photo.jpg")}
          alt=""
        />
        <span className={classes.userName}>Анисимов Илья</span>
      </div> );
}
 
export default AccountUserInfo;