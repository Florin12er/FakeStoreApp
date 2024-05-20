import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

const NavBar = () => {
  const location = useLocation();
  const [enabled, setEnabled] = useState(false);

 useEffect(() => {
    if (enabled) {
      document.body.classList.add('bg-black', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-black', 'text-white');
    }
  }, [enabled]);
  return (
    <>
      <nav className="flex justify-center p-4">
        <h1 className="text-3xl mr-auto ml-5">
          <Link to="/">Fakeshop</Link>
        </h1>
        <ul className="flex justify-center gap-4 mr-5">
          <li>
            <Link
              to="/"
              className={`focus:border-b-4 focus:border-red-500 ${location.pathname === "/" ? "border-b-4 border-red-500" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`focus:border-b-4 focus:border-red-500 ${location.pathname === "/products" ? "border-b-4 border-red-500" : ""}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`focus:border-b-4 focus:border-red-500 ${location.pathname === "/cart" ? "border-b-4 border-red-500" : ""}`}
            >
              Cart
            </Link>
          </li>
        </ul>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`group inline-flex h-9 w-16 items-center rounded-full transition ${
            enabled ? 'bg-yellow-500' : 'bg-black'
          }`}
        >
          <span
            className={`inline-block h-7 w-7 transform rounded-full bg-white transition ${
              enabled ? 'translate-x-8' : 'translate-x-1'
            }`}
          />
        </Switch>
      </nav>
    </>
  );
};

export { NavBar };

