import React, { useState, useEffect } from "react";
import classes from "../../modules/account.module.css";
import AccountUserInfo from "./accountUserInfo";
import AccountQuestions from "./accountQuestions";
import AccountEditUserPage from "./accountEditUserPage";
import ModalWindow from "../modalWindow/modalWindow";

const AccountSettings = () => {
  const [isModuleWindow, setModuleWindow] = useState(false)
  const handleOpenModule = () => {
    setModuleWindow((prevState)=>!prevState);
  }
  return (
    <div style={{margin: "0 0 30px 50px"}}>
      <div className={classes.accountSettingsWrapper}>
        <AccountUserInfo edit={true} />
        <div className={classes.settingsLineWrapper}>
          <div className={classes.settingsLine}>
            <span className={classes.settingsName}>Анисимов Илья</span>
          </div>
          <div className={classes.settingsLine}>
            <span className={classes.settingsTitle}>Телефон:</span>
            <span className={classes.settingsText}>+7 912 217 63 50</span>
          </div>
          <div className={classes.settingsLine}>
            <span className={classes.settingsTitle}>Email:</span>
            <span className={classes.settingsText}>
              anisimov_ilya26@mail.ru
            </span>
          </div>
        </div>
        <div className={classes.editButtonWrapper}>
          <button type="button" data-bs-toggle="modal" data-bs-target="#edit" className={classes.editButton} onClick={handleOpenModule}>
            <i className="bi bi-tools"></i>
            <span className={classes.editButtonSpan}>изменить</span>
          </button>
        </div>
          </div>
      <AccountQuestions modal={false} />
      <ModalWindow id="edit">
      <AccountEditUserPage/>
      </ModalWindow>
      
      
    </div>
  );
};

export default AccountSettings;
