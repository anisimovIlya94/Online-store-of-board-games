import React from 'react'
import classes from "../../modules/catalog.module.css"
import _ from "lodash";

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
    const arrow = "<"
    const reverseArrow = ">"
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return ( 
        <div className={classes.paginationMargin}>
          <ul className={classes.paginationWrapper}>
          <li className={classes.paginationButton}>
            <button disabled={currentPage===1} className={currentPage === 1 ? "" : classes.paginateText}
                    onClick={() => onPageChange(currentPage - 1)}>
                    {arrow}
            </button>
            </li>
          {pages.map((page) => {
                    return (
                        <li
                            key={"page_" + page}
                            className={
                                classes.paginationButton +
                                (page === currentPage ? " " + classes.active : "")
                            }
                        >
                            <button className={classes.paginateText + (page === currentPage ? " " + classes.activeText : "")}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
          <li className={classes.paginationButton}>
            <button disabled={currentPage===pages.length} className={currentPage === pages.length ? "" : classes.paginateText}
                    onClick={() => onPageChange(currentPage + 1)}>
                    {reverseArrow}
            </button>
            </li>
          </ul>
          </div>
     );
}
 
export default Pagination;

{/* <button className={classes.paginationButton + " " + classes.active}>1</button>
          <button className={classes.paginationButton}>2</button> */}