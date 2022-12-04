import React from "react";
import classes from "../../modules/account.module.css"
import cardImage from "../../images/account/userCard-logo.svg"

const AccountUserCard = ({status}) => {
    return (<div className={classes.userCardWrapper}>
        <div className={classes.userCardBoard} style={{border: `4px solid ${status.color}`, background: status.background}}>
            <img className={classes.userCardImage} src={cardImage} alt="" />
            <p style={{color: status.color}} className={classes.userCardProcent}>{status.discount}</p>
      </div>
  </div>);
};

export default AccountUserCard;
