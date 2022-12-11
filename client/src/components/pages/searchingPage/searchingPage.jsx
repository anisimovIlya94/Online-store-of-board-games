import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "../../../modules/search.module.css";
import { getCatalogLoadingStatus, getProductsRedux } from "../../../store/catalog";
import MainCard from "../../main/mainCard";

const SearchingPage = () => {
    const [products, setProducts] = useState([])
    const { name } = useParams();
  const isLoading = useSelector(getCatalogLoadingStatus())
  const productsRedux = useSelector(getProductsRedux())

  const getProductsByName = (name) => {
    if (!isLoading) {
      const currentName = name.toLowerCase().trim();
  return productsRedux.filter((prod) => {
    return prod.name.toLowerCase().includes(currentName);
  });
    } else {
      return []
    }
  }

    useEffect(() => {
        if (name) {
            setProducts(getProductsByName(name))
        }
    }, [isLoading])
    if (isLoading) {
      return (
          <div className={"d-flex justify-content-center "} style={{margin: "400px 0"}}>
            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
      );
    }
  return (
    <div className={classes.searchWrapper}>
      <div className="container text-center">
              <div className="row row-cols-5">
                  {name && products.map((prod) => {
                      return (
                          <div style={{margin: "0 0 20px 0"}} className="col" key={prod._id + "searchPage"}>
                              <MainCard cardInformation={prod} />
                          </div>
                      )
                  })}
          {/* <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div> */}
        </div>
      </div>
    </div>
  );
};

export default SearchingPage;
