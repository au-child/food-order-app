import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }
  function hideModalHandler() {
    setShowModal(false);
  }

  return (
    <CartProvider>
      {showModal && <Cart hideModalHandler={hideModalHandler} />}
      <Header showModalHandler={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
