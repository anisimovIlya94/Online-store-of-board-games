import React from 'react'
import cartIcon from '../images/eva_shopping-cart-fill.png'
import cartIconActive from '../images/eva_shopping-cart-fill — копия.png'
import classes from '../modules/header.module.css'

const ShoppingCart = ({onHover,cart}) => {
   return (
      <button className={classes.litterBin}>
         <span className={' position-relative'}>
         <img src={cart ? cartIconActive : cartIcon} onMouseEnter={()=>onHover()} onMouseLeave={()=>onHover()} alt="" />
            <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-warning">
    0
    <span className="visually-hidden">непрочитанные сообщения</span>
  </span>
         </span>
         
     </button>
  )
}

export default ShoppingCart