import React from 'react'
import arrow from '../images/header/arrow.png'
import classes from '../modules/navCategory.module.css'

const NavCategory = ({name, withArrow}) => {
   return (
      <li className={classes.category}>
         <button>
            <span className={classes.categorySpan}>{name}</span>
         </button>
         {withArrow
            ? <img className={classes.arrow} src={arrow} alt="" />
            
            : null}
      </li>
  )
}

export default NavCategory