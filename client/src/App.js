import Header from "./components/header/header";
import Footer from "./components/footer";
import OpenedNavBar from "./components/header/openedNavBar";
import { useState, useRef, useEffect } from "react";
import Main from "./components/layouts/main";
import Catalog from "./components/layouts/catalog";
import { Switch, Redirect, Route } from "react-router-dom";
import ShoppingCart from "./components/layouts/shoppingCart";
import Search from "./components/layouts/search";
import Admin from "./components/layouts/admin";
import ShoppingProvider from "./components/hooks/useShopping";
import PersonalAccount from "./components/layouts/personalAccount";
import ModalWindow from "./components/modalWindow/modalWindow";
import LoginWindow from "./components/personalAccount/loginWindow";
// import AuthProvider from "./components/hooks/useAuth";
import CategoryProvider from "./components/hooks/useCategory";
import CatalogProvider from "./components/hooks/useCatalog";
// import RecomendationsProvider from "./components/hooks/useRecomendations";
import Login from "./components/layouts/login";
import ProtectedAdminRoute from "./components/common/protectedAdminRoute";
import ProtectedLoginRoute from "./components/common/protectedLoginRoute";
import { useDispatch } from "react-redux";
import { loadRecomendationsList } from "./store/recomendations";
import { loadUser } from "./store/user";
import localStorageService from "./components/services/localStorage.service";
import { loadProductsList } from "./store/catalog";

function App() {
  // const [openNavCatalog, setOpenNavCatalog] = useState(false);
  // const toggleNavCatalog = () => {
  //   setOpenNavCatalog(!openNavCatalog);
  //   if (document.body.style.overflow !== "hidden") {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "scroll";
  //   }
  // };
  const closeModalRef = useRef();
  const closeModal = () => {
    closeModalRef.current.click()
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadRecomendationsList())
    dispatch(loadProductsList())
    if (localStorageService.getUserIdToken()) {
      dispatch(loadUser())
    }
  },[])
  return (
    <>
      <CategoryProvider>
        <div className="App">
          {/* <AuthProvider> */}
            <CatalogProvider>
              <ShoppingProvider>
                <div className="header">
                  <Header />
                </div>
                <ModalWindow reference={closeModalRef} id="login">
                  <LoginWindow  margin="0 0 30px -28px" closeModal={closeModal}/>
                </ModalWindow>
                {/* <RecomendationsProvider> */}
                  <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/shopping" component={ShoppingCart} />
                    <Route path="/login" component={Login} />
                    <Route
                      path="/catalog/:category?/:sub?/:productId?"
                      component={Catalog}
                    />
                    <Route path="/search/:name?" component={Search} />
                    <ProtectedLoginRoute path="/persaccount/:accountPage?"
                      component={PersonalAccount}/>
                    {/* <Route
                      path="/persaccount/:accountPage?"
                      component={PersonalAccount}
                    /> */}
                    <ProtectedAdminRoute
                      path="/admin/:adminPage?"
                      component={Admin}
                    />
                    {/* <Route path="/admin/:adminPage?" component={Admin}/> */}
                    <Redirect from="*" to="/" />
                  </Switch>
                {/* </RecomendationsProvider> */}
                <Footer />
              </ShoppingProvider>
            </CatalogProvider>
          {/* </AuthProvider> */}
        </div>
      </CategoryProvider>
    </>
  );
}

export default App;