import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ProductComponent = (props) => {
  return (
    <div className="mb-5 ml-20 border-2 border-solid border-black w-72 rounded h-96">
      <img className="ml-14 w-44" src={props.image} />
      <h3>{props.name}</h3>
      <p>
        {props.rating}⭐️ ({props.ratingNumber})
      </p>
      <h2>${props.price}</h2>
      <button className="bg-red-399">Add to cart</button>
    </div>
  );
};

ProductComponent.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  ratingNumber: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
};

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const formattedItems = json.map((item) => ({
          id: item.id,
          name: item.title,
          rating: item.rating.rate,
          ratingNumber: item.rating.count,
          price: item.price,
          image: item.image,
        }));
        setItems(formattedItems);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="grid custom-grid-cols">
      {items.map((item) => (
        <ProductComponent
          key={item.id}
          name={item.name}
          price={item.price}
          rating={item.rating}
          ratingNumber={item.ratingNumber}
          image={item.image}
        />
      ))}
    </div>
  );
};

export { Products };
