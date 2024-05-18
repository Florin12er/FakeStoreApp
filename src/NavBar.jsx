import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

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
      </nav>
    </>
  );
};

export { NavBar };
