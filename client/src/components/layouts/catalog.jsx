import { useParams } from "react-router-dom";
import CatalogPage from "../pages/catalogPage";
import ProductPage from "../pages/productPage/productPage";
// import CatalogProvider from "../hooks/useCatalog";

const Catalog = () => {
  const { productId } = useParams();
  return (
    // <CatalogProvider>
    // {
    productId ? <ProductPage /> : <CatalogPage />
// }
      // </CatalogProvider>
  );
};

export default Catalog;
