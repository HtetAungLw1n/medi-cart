import Nav from "./layout/Nav";
import Products from "./layout/Products";
import Footer from "./layout/Footer";
import { useState } from "react";
import Backdrop from "./components/Backdrop";

function App() {
  const [isShow, setIsShow] = useState(false);

  const showCartHandler = () => {
    setIsShow(true);
  };
  const hideCartHandler = () => {
    setIsShow(false);
  };

  return (
    <section className="relative">
      <Nav showCartHandler={showCartHandler} />
      <Products />
      <Footer />
      <Backdrop isShow={isShow} hideCartHandler={hideCartHandler} />
    </section>
  );
}

export default App;
