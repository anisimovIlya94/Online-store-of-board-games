import React from 'react'
import cartIcon from '../../images/header/shopping-cart.png'
import cartIconActive from '../../images/header/shopping-cart-active.png'
import classes from '../../modules/header.module.css'
import { useHistory } from 'react-router-dom'
import { useShopping } from '../hooks/useShopping'

const ShoppingCartButton = ({ onHover, cart }) => {
   const { getCartItemsCount } = useShopping();
   const count = getCartItemsCount();
   const history = useHistory();  
   const handleClick = () => {
      history.replace("/shopping")
   } 
   return ( 
         <a className={classes.shoppingCart} onClick={handleClick} href="">
            <span className='position-relative'>
            <img src={cart ? cartIconActive : cartIcon} onMouseEnter={()=>onHover()} onMouseLeave={()=>onHover()} alt="" />
               <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-warning">{count}</span>
            </span>
         </a>
  )
}

export default ShoppingCartButton