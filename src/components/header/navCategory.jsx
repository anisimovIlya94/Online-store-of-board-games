import React from 'react'
import arrow from '../../images/header/arrow.png'
import classes from '../../modules/navCategory.module.css'

const NavCategory = ({name, withArrow,onHover,onLeave, value}) => {
   return (
      <li className={classes.category}>
         <button>
            <span className={classes.categorySpan} onMouseOver={()=>onHover(name)} onMouseLeave={onLeave}>{value}</span>
         </button>
         {withArrow
            ? <img className={classes.arrow} src={arrow} alt="" />
            
            : null}
      </li>
  )
}

export default NavCategory