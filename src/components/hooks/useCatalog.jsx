import React, { useContext, useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
import productService from "../services/product.service";
import { useCategory } from "./useCategory";

const CatalogContext = React.createContext();

export const useCatalog = () => {
  return useContext(CatalogContext);
};

const CatalogProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [filtered, setFiltered] = useState(false)
  const history = useHistory()
  const { getCategoryById,getSubCategoryById, isLoading : isCategoryLoading } = useCategory()
  // const params = useParams()
  // console.log(params)
  // const { category, sub, productId } = useParams();
  const [filters, setFilters] = useState({
    currentPrice: { min: 20, max: 47000 },
    quantity: { min: 2, max: 6 },
    age: { min: 6, max: 18 },
    time: [
      { name: "30+", value: "30+", checked: false, time: 30 },
      { name: "60+", value: "60+", checked: false, time: 60 },
    ],
  });
  useEffect(() => {
    getProductsList()
  }, [])
  // useEffect(() => {
  //   console.log(isLoading)
  // }, [isLoading])
  async function getProductsList() {
    try {
      const { content } = await productService.get();
      setProducts(content)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
        // errorCatcher(error);
    }
  }
  async function handleChangeProduct (id,data) {
    try {
      const { content } = await productService.patch(id, data);
      setProducts(products.map((prod) => {
        if (prod._id === id) {
          return {_id: id, ...data}
        }
        return prod
      }))
      return content
      // console.log([...products,content])
      // setProducts([...products,content])
    } catch (error) {
      console.log(error)
    }
  }
  async function handleCreateProduct(_id,data) {
    try {
      const { content } = await productService.create(_id,{_id,...data});
      console.log(content)
      history.push(`/catalog/${data.categories[0]}/${data.subcategories[0]}/${_id}`)
    } catch (error) {
      console.log(error)
    }
  }
  const handleRemoveProduct = async (prodId) => {
    try {
      const { content } = await productService.delete(prodId);
      if (content === null) {
        setProducts(products.filter((prod)=>prod._id !== prodId))
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  const getProductsByCategory = (categoryId, categoryName, isRecomendation, prodId) => {
      const ii = products.filter((prod) => {
        return prod[categoryName].includes(categoryId);
      });
    if (isRecomendation) {
        return ii.filter((prod)=>prod._id !== prodId).slice(0,7)
      }
    // console.log(ii.length)
    // console.log(products)
    // if (ii.length === 0 && products.length === 0) {
    //   // console.log(ii)
    //   history.replace("/catalog")
       
    //     }
    return ii;
      // return products;
  };
  const getProductByCode = (code) => {
    return products.find((prod)=>prod.code === code)
  }
  const getProducts = (category, sub) => {
    const isCategory = getCategoryById(category)
    const isSubcategory = getSubCategoryById(sub)
    if (((category && !isCategory) || (sub && !isSubcategory)) && !isCategoryLoading) {
      history.replace("/catalog")
    }
    let result;
      if (category) {
        if (sub) {
          result = getProductsByCategory(sub, "subcategories");
          return (filtered ? handleFilter(result) : result)
        }
        result = getProductsByCategory(category, "categories");
        // console.log(result)
        return (filtered ? handleFilter(result) : result)
      } else {
        result = products
        return (filtered ? handleFilter(result) : result)
    }
    
    };
  const getProductById = (productId) => {
    if (!isLoading) {
      const ii = products.filter((prod) => prod._id === productId);
      if (ii.length === 0 ) {
        // return {}
        history.replace("/catalog")
      }
      return ii[0];
    } else {
      // console.log(products)
    }
  };
  const getProductsByName = (name) => {
    const currentName = name.toLowerCase().trim()
    return products.filter((prod) => {
      return prod.name.toLowerCase().includes(currentName)
    })
  }
  // const getProductsByCategory = () => {

  // }
  const handleChangeFilters = (data) => {
      setFilters(data);
      setFiltered(true)
    };
  const handleFilter = (products) => {
    const resultArray = []
    const timeChecked = filters.time.filter((t) => t.checked === true)
    let filterTime;
    if (timeChecked.length > 0) {
      filterTime = timeChecked.length > 1 ? 60 : timeChecked[0].time
    }
        if (!isLoading) {
            for (const prod of products) {
                const isAdult = prod.age >= filters.age.min && prod.age <= filters.age.max
                const isCorrectPrice = prod.currentPrice >= filters.currentPrice.min && prod.currentPrice <= filters.currentPrice.max
                const isCorrectTime = (prod.time && timeChecked.length > 0) ? (prod.time.max >= filterTime) : true
              const isCorrectQuantity = prod.quantity ? (prod.quantity.min <= filters.quantity.min && prod.quantity.max >= filters.quantity.max) : true
                if (isAdult && isCorrectPrice && isCorrectQuantity && isCorrectTime) {
                    resultArray.push(prod)
                }
          }
          return resultArray
        } else {
          return []
        }
        
    }
  return (
    <CatalogContext.Provider
      value={{
        filters,
        handleChangeFilters,
        getProductById,
        getProducts,
        isLoading,
        getProductsByName,
        handleChangeProduct,
        handleCreateProduct,
        handleRemoveProduct,
        getProductByCode,
        getProductsByCategory
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export default CatalogProvider;
