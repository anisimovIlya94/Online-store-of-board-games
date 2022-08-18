import React, { useState } from 'react'
import burger from '../images/header/бургер.png'
import burgerActive from '../images/header/бургер-active.png'
import classes from '../modules/navBar.module.css'
import VkLogo from './vkLogo'
import closeIcon from '../images/header/close-icon.png'
import closeIconActive from '../images/header/close-icon — active.png'
import NavCategory from './navCategory'

const NavBar = ({ onHover, burgerState, onToggleCatalog, isSelectCatalog }) => {
   const [hoverClose,setHoverClose] = useState(false)
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
        {isSelectCatalog
           ? <>
              <div className={classes.openedCatalog}>
                 <div className={classes.leftColumn}>
                    <button className={classes.closeBtn} onClick={onToggleCatalog} onMouseEnter={()=>setHoverClose(true)} onMouseLeave={()=>setHoverClose(false)}>
                        <img src={hoverClose ? closeIconActive : closeIcon} />
                        <span className={hoverClose ? classes.closeBtnSpanHover : classes.closeBtnSpan}>Закрыть</span>
                    </button>
                    <ul className={classes.categories}>
                        <NavCategory name={'Все категории'} withArrow={false}/>
                       <NavCategory name={'Настольные Игры'} withArrow={true} />
                       <NavCategory name={'Magic:the Cathering'} withArrow={true} />
                       <NavCategory name={'Warhammer 4000'} withArrow={true} />
                       <NavCategory name={'Акссесуары для игр'} withArrow={true} />
                       <NavCategory name={'Краски'} withArrow={true} />
                       <NavCategory name={'Товары для детей'} withArrow={true} />
                       <NavCategory name={'Акссесуары для моделизма'} withArrow={true} />
                    </ul>
                 </div>
               </div>
            </>
           : null}
    </div>
  )
}

export default NavBar