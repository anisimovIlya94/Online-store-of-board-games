import React from "react";
import burger from "../../images/header/бургер.png";
import burgerActive from "../../images/header/бургер-active.png";
import classes from "../../modules/navBar.module.css";
import VkLogo from "../vkLogo";
import OpenedNavBar from "./openedNavBar";
import { Link } from "react-router-dom";
// import closeIcon from '../images/header/close-icon.png'
// import closeIconActive from '../images/header/close-icon — active.png'
// import NavCategory from './navCategory'
// import OpenedNavBar from './openedNavBar'

const NavBar = ({ onHover, burgerState, onToggleCatalog }) => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.navFlex}>
        <li
          onMouseEnter={() => onHover()}
          onMouseLeave={() => onHover()}
          onClick={() => onToggleCatalog()}
        >
          <button
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <img
              className={classes.burger}
              src={burgerState ? burgerActive : burger}
              alt=""
            />
            <span
              className={burgerState ? classes.navLinkHover : classes.navLinks}
            >
              Каталог
            </span>
          </button>
        </li>
        <li>
          <Link
            className={classes.navLinks}
            to="/catalog/cpTsuR96uA23cdM-mrghU003"
          >
            <span>Warhammer</span>
          </Link>
        </li>
        <li>
          <Link
            className={classes.navLinks}
            to="/catalog/cpTsuR96uA23cdM-mrghU002"
          >
            <span>Magic:the Cathering</span>
          </Link>
        </li>
        <li>
          <a className={classes.navLinks} href="#">
            <span>Мероприятия</span>
          </a>
        </li>
        <li>
          <a className={classes.navLinks} href="#">
            <span>О центре</span>
          </a>
        </li>
        <li>
          <a className={classes.navLinks} href="#">
            <span>Контакты</span>
          </a>
        </li>
        <li>
          <VkLogo />
        </li>
      </ul>
      {<div>
        <div
          className={"offcanvas offcanvas-top " + classes.open}
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header">
            <OpenedNavBar />
          </div>
        </div>
      </div>}
    </div>
  );
};

export default NavBar;
