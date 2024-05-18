import PropTypes from "prop-types";
import { useState } from "react";

const ProductComponent = (props) => {
  return (
    <>
      <div className="mb-5 ml-20 border-2 border-solid  border-black w-72 rounded h-96">
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
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
    { id: 1, name: "Item 1", rating: 20, price: 2, ratingNumber: 2 },
  ]);
  return (
    <>
      <div className="grid custom-grid-cols">
        {items.map((item) => (
          <ProductComponent
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            ratingNumber={item.ratingNumber}
          />
        ))}
      </div>
    </>
  );
};
export { Products };
