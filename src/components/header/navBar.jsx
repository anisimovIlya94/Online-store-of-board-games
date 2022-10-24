import React from 'react'
import burger from '../../images/header/бургер.png'
import burgerActive from '../../images/header/бургер-active.png'
import classes from '../../modules/navBar.module.css'
import VkLogo from '../vkLogo'
// import closeIcon from '../images/header/close-icon.png'
// import closeIconActive from '../images/header/close-icon — active.png'
// import NavCategory from './navCategory'
// import OpenedNavBar from './openedNavBar'

const NavBar = ({ onHover, burgerState, onToggleCatalog }) => {
   
  return (
     <div className={classes.wrapper}>
        <ul className={classes.navFlex}>
           <li onMouseEnter={()=>onHover()} onMouseLeave={()=>onHover()} onClick={()=>onToggleCatalog()}>
              <a href="#">
              <img className={classes.burger} src={burgerState ? burgerActive : burger} alt="" />
              <span className={burgerState ? classes.navLinkHover : classes.navLinks}>Каталог</span>
              </a>
           </li>
           <li><a className={classes.navLinks} href="#">
              <span>Warhammer</span>
              </a></li>
           <li><a className={classes.navLinks} href="#">
              <span>Magic:the Cathering</span>
              </a></li>
           <li><a className={classes.navLinks} href="#">
              <span>Мероприятия</span>
              </a></li>
           <li><a className={classes.navLinks} href="#">
              <span>О центре</span>
              </a></li>
           <li><a className={classes.navLinks} href="#">
              <span>Контакты</span>
              </a></li>
           <li>
              <VkLogo/>
           </li>
        </ul>
        {/* {isSelectCatalog
           ? <OpenedNavBar onToggleCatalog={onToggleCatalog}/>
           : null} */}
    </div>
  )
}

export default NavBar