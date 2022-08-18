import React from 'react'
import cartIcon from '../images/header/shopping-cart.png'
import cartIconActive from '../images/header/shopping-cart-active.png'
import classes from '../modules/header.module.css'

const ShoppingCart = ({onHover,cart}) => {
   return (
      <button className={classes.shoppingCart}>
         <span className={' position-relative'}>
         <img src={cart ? cartIconActive : cartIcon} onMouseEnter={()=>onHover()} onMouseLeave={()=>onHover()} alt="" />
            <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-warning">0</span>
         </span>
         
     </button>
  )
}

export default ShoppingCart