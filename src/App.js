import Header from "./components/header/header";
import Footer from "./components/footer";
import OpenedNavBar from "./components/header/openedNavBar";
import { useState } from "react";
import Main from "./components/layouts/main";
import Catalog from "./components/layouts/catalog";
import { Switch, Redirect, Route } from "react-router-dom";
import ShoppingCart from "./components/layouts/shoppingCart";
import ShoppingProvider from "./components/hooks/useShopping";
import PersonalAccount from "./components/layouts/personalAccount";
import ModalWindow from "./components/modalWindow/modalWindow";
import LoginWindow from "./components/personalAccount/loginWindow";
import Acc from "./components/personalAccount/acc";

function App() {
  const [openNavCatalog, setOpenNavCatalog] = useState(false);
  const toggleNavCatalog = () => {
    setOpenNavCatalog(!openNavCatalog);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const bodyStyle = {
    overflow: "hidden",
  };
  return (
    <>
      {openNavCatalog ? (
        <div className="openedNavBar">
          <OpenedNavBar onToggleCatalog={toggleNavCatalog} />
        </div>
      ) : null}
      <div className="App">
        <ShoppingProvider>
          <div className="header">
            <Header onToggleCatalog={toggleNavCatalog} />
          </div>
          <ModalWindow id="login">
            <LoginWindow />
          </ModalWindow>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/shopping" component={ShoppingCart} />
            <Route path="/catalog/:category?/:sub?/:productId?" component={Catalog} />
            <Route
              path="/persaccount/:accountPage?"
              component={PersonalAccount}
            />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </ShoppingProvider>
      </div>
    </>
  );
}

export default App;
