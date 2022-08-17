import React, { useEffect, useState } from 'react'
import classes from '../modules/header.module.css'
import logo from '../images/header-logo.png'
import magnifier from '../images/Vector.png'
import telephone from '../images/telephone.png'
import personalAccount from '../images/1.png'
import personalAccountActive from '../images/2.png'
import ShoppingCart from './shoppingCart'

const Header = () => {
   const [account, setAccount] = useState(false)
   const [cart, setCart] = useState(false)
   const handleToggleAccount = () => {
      setAccount(!account)
   }
   const handleToggleCart = () => {
      setCart(!cart)
   }
   return (
      <div className={classes.header}>
         <div className={classes.wrapper}>
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
  )
}

export default Header