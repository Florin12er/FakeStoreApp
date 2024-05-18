import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 custom-height place-items-center">
        <div className="text-center">
          <h1 className="text-6xl mb-8">Fakeshop</h1>
          <p className="text-3xl mb-8">
            Buy cool things from <br />
            this shop that is totally real
          </p>
          <button className="bg-rose-300 p-3 rounded">
            <Link to="/products">Shop Now</Link>
          </button>
        </div>
        <div className="bg-cyan-50">Hello</div>
      </div>
    </>
  );
};

export { Home };
