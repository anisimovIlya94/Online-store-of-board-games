import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "../../../modules/search.module.css";
import { useCatalog } from "../../hooks/useCatalog";
import MainCard from "../../main/mainCard";

const SearchingPage = () => {
    const [products, setProducts] = useState([])
    const { name } = useParams();
    const { getProductsByName, isLoading } = useCatalog()
    useEffect(() => {
        if (name) {
            setProducts(getProductsByName(name))
        }
    },[isLoading])
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
