import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../fakeAPI/products";

const CatalogContext = React.createContext();

export const useCatalog = () => {
  return useContext(CatalogContext);
};
const initialState = getAllProducts();

const CatalogProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState(false)
  const { category, sub, productId } = useParams();
  const [filters, setFilters] = useState({
    currentPrice: { min: 20, max: 47000 },
    quantity: { min: 2, max: 6 },
    age: { min: 6, max: 18 },
    time: [
      { name: "30+", value: "30+", checked: false, time: 30 },
      { name: "60+", value: "60+", checked: false, time: 60 },
    ],
  });
    // useEffect(() => {
    //     console.log(products)
    // }, [products])
  const getProductsByCategory = (categoryId, categoryName) => {
      const ii = initialState.filter((prod) => {
      return prod[categoryName].includes(categoryId);
    });
      if (ii.length > 0) {
      return ii;
    }
    return products;
  };
  const getProducts = () => {
    if (category) {
      if (sub) {
          setProducts(getProductsByCategory(sub, "subcategories"));
          return
      }
        setProducts(getProductsByCategory(category, "categories"));
        return
    }
     setProducts(initialState);
    };
    useEffect(() => {
        getProducts()
    }, [])
  const getProductById = () => {
    const ii = initialState.filter((prod) => prod._id === productId);
    if (!ii) {
      return "f"
    }
      return ii[0];

    
  };
  const handleChangeFilters = (data) => {
      setFilters(data);
      setFiltered(true)
    };
  const handleFilter = () => {
    const resultArray = []
    const timeChecked = filters.time.filter((t) => t.checked === true)
    let filterTime;
    if (timeChecked.length > 0) {
      filterTime = timeChecked.length > 1 ? 60 : timeChecked[0].time
    }
      // console.log(filterTime)
        if (products.length > 0) {
            for (const prod of products) {
                const isAdult = prod.age >= filters.age.min && prod.age <= filters.age.max
                const isCorrectPrice = prod.currentPrice >= filters.currentPrice.min && prod.currentPrice <= filters.currentPrice.max
                const isCorrectTime = (prod.time && timeChecked.length > 0) ? (prod.time.max >= filterTime) : true
              const isCorrectQuantity = prod.quantity ? (prod.quantity.min <= filters.quantity.min && prod.quantity.max >= filters.quantity.max) : true
                if (isAdult && isCorrectPrice && isCorrectQuantity && isCorrectTime) {
                    resultArray.push(prod)
                }
            }
        }
        return resultArray
    }
  const filteredProducts = handleFilter()
  const resultProducts = filtered ? filteredProducts : products
  return (
    <CatalogContext.Provider
      value={{
        filters,
        handleChangeFilters,
        getProductById,
        products: resultProducts,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export default CatalogProvider;
