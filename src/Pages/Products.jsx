import PropTypes from "prop-types";
import { useState } from "react";

const ProductComponent = (props) => {
  return (
    <>
      <div className=" border-2 border-solid  border-black w-72 rounded h-96">
        <h3>{props.name}</h3>
        <p>
          {props.rating}⭐️({props.ratingNumber})
        </p>
        <h2>${props.price}</h2>
        <button className="bg-red-399">Add to cart</button>
      </div>
    </>
  );
};
ProductComponent.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  ratingNumber: PropTypes.number,
  price: PropTypes.number,
};
const Products = () => {
  return (
    <>
      <div>
        <ProductComponent
          name="name"
          rating="3.8"
          ratingNumber="100"
          price="200"
        />
      </div>
    </>
  );
};
export { Products };
