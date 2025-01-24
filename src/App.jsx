import Nav from "./layout/Nav";
import Products from "./layout/Products";
import Footer from "./layout/Footer";
import { useState } from "react";
import Backdrop from "./components/Backdrop";
import ItemContextProvider from "./store/ItemContextProvider";

function App() {
  const [isShow, setIsShow] = useState(false);

  const showCartHandler = () => {
    setIsShow(true);
  };
  const hideCartHandler = () => {
    setIsShow(false);
  };

  return (
    <ItemContextProvider>
      <section className="relative">
        <Nav showCartHandler={showCartHandler} />
        <Products />
        <Footer />
        <Backdrop isShow={isShow} hideCartHandler={hideCartHandler} />
      </section>
    </ItemContextProvider>
  );
}

export default App;
