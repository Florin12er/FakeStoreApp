import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Home } from "./Pages/Home.jsx";
import { Products } from "./Pages/Products.jsx";
import { Cart } from "./Pages/Cart.jsx";
import { NavBar } from "./NavBar.jsx";
import { Copyright } from "./copyright.jsx";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <NavBar cartItems={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} setCart={setCart} />} />
      </Routes>
      <Copyright />
    </>
  );
}

export default App;

