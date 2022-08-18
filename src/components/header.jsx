import React, { useState, useEffect } from 'react'
import classes from '../modules/header.module.css'
import logo from '../images/header/header-logo.png'
import magnifier from '../images/header/Vector.png'
import telephone from '../images/header/telephone.png'
import personalAccount from '../images/header/account.png'
import personalAccountActive from '../images/header/account-active.png'
import ShoppingCart from './shoppingCart'
import NavBar from './navBar'

const Header = () => {
   const [account, setAccount] = useState(false)
   const [cart, setCart] = useState(false)
   const [burger, setBurger] = useState(false)
   const [openNavCatalog, setOpenNavCatalog] = useState(false)
   useEffect(() => {
      console.log(openNavCatalog)
   },[openNavCatalog])
   const handleToggleAccount = () => {
      setAccount(!account)
   }
   const handleToggleCart = () => {
      setCart(!cart)
   }
   const handleToggleBurger = () => {
      setBurger(!burger)
   }
   const handleToggleNavCatalog = () => {
      setOpenNavCatalog(!openNavCatalog)
   }
   return (
      <div className={classes.header}>
         <div className={classes.wrapper}>
            <div className={classes.hat}>
            <a href="#"> <img className={classes.image} src={logo} alt="#" /></a>
            <div className={classes.search}>
               <input className={classes.input} type="text" placeholder='Найти игру' />
               <button className={classes.magnifier}><img src={magnifier} alt=""/></button>
            </div>
            <img className={classes.telephone} src={telephone} alt="" />
            <p className={classes.telephoneNumber}>+7 (495) 911-10-11</p>
            <button className={classes.personalAccount}><img src={account ? personalAccountActive : personalAccount} onMouseEnter={()=>handleToggleAccount()} onMouseLeave={()=>handleToggleAccount()} alt="" /></button>
            <ShoppingCart onHover={handleToggleCart} cart={cart}/>
            </div>
         </div>
         <NavBar onHover={handleToggleBurger}
                  burgerState={burger}
                  onToggleCatalog={handleToggleNavCatalog}
                  isSelectCatalog={openNavCatalog}
                  />
      </div>
  )
}

export default Header