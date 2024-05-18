import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { Products } from "./Pages/Products.jsx";
import { Cart } from "./Pages/Cart.jsx";
import { NavBar } from "./NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
