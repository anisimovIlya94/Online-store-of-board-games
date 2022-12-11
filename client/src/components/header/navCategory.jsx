import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../images/header/arrow.png";
import classes from "../../modules/navCategory.module.css";
import { useCategory } from "../hooks/useCategory";

const NavCategory = ({ name, withArrow, onHover, onLeave, value, link }) => {
  const { isLoading } = useCategory();
  if (isLoading) {
    return "Loading...";
  }
  return (
    <li className={classes.category}>
      <NavLink
        activeClassName={classes.activeLink}
        className={classes.link}
        to={`/catalog/${link}`}
        onMouseOver={() => onHover(name)}
        onMouseLeave={onLeave}
      >
        <span data-bs-dismiss="offcanvas">{value}</span>
      </NavLink>
      {withArrow ? <img className={classes.arrow} src={arrow} alt="" /> : null}
    </li>
  );
};

export default NavCategory;
