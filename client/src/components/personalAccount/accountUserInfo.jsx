import React from "react";
import classes from "../../modules/account.module.css";

const AccountUserInfo = ({ edit }) => {
  return (
    <div className="d-flex">
      <div className={classes.accountPhotoWrapper}>
      <img
        className={classes.accountPhoto}
        src={require("../../images/account/account-photo.png")}
        alt=""
        />
        {edit ? (
        <button className={classes.accountPhotoEdit}>
          <i className="bi bi-camera-fill"></i>
        </button>
      ) : null}
      </div>
    </div>
  );
};

export default AccountUserInfo;
