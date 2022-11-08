import React from 'react';
import MainCard from '../main/mainCard';
import classes from "../../modules/catalog.module.css"

const CatalogProductCards = ({ productsCrop }) => {
  if (productsCrop.length === 0) {
      return <h2>Товары не найдены</h2>
    }
    return (
        <div className={"container text-center "}>
          <div className={"row row-cols-3 " + classes.catalogTable}>
            {productsCrop.map((product) => {
              return (
                <div className={"col " + classes.catalogCard} key={product._id}>
                  <MainCard cardInformation={product} />
                </div>
              );
            })}
          </div>
        </div>
    );
}
 
export default CatalogProductCards;