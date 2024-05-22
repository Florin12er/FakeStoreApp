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
        <img className="w-9/12" src="https://img.freepik.com/free-vector/shop-with-sign-open-design_23-2148544029.jpg?t=st=1716230487~exp=1716234087~hmac=ea1dde9bd89f4ce2e4645eca6aab77c3b353aeb8ccf4becc11397ef18f512782&w=1380" />
      </div>
    </>
  );
};

export { Home };
