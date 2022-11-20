import React, { useState } from "react";
import Switcher from "../product/switcher";
import AccountLoginUserPage from "./accountLoginUserPage";
import AccountRegisterForm from "./accountRegisterForm";
import { useRouteMatch } from "react-router-dom";
import classes from "../../modules/account.module.css";

const LoginWindow = ({margin}) => {
  const [state, setState] = useState("login");
  const handleChange = (name) => {
    setState(name);
  };
  const { path } = useRouteMatch()
  const buttons = [
    { id: "butt3", label: "Вход", name: "login" },
    { id: "butt4", label: "Регистрация", name: "register" },
  ];
  return (
    <div style={{ backgroundColor: "inherit" }}>
      <h2 style={{margin: margin}} className={classes.loginTitle}>Войдите или зарегистрируйтесь</h2>
      <div style={{maxWidth: "100%", overflow: "hidden"}}>
      <Switcher buttons={buttons} state={state} onChange={handleChange} />
      </div>
      
          {state === "login" &&
        <AccountLoginUserPage path={path} />}
          {state === "register" && 
              <AccountRegisterForm/>
          }
    </div>
  );
};

export default LoginWindow;
