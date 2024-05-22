import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ProductComponent = ({ name, rating, ratingNumber, price, image, onAddToCart }) => {
    return (
        <div className="mb-5 ml-20 border-2 border-solid border-black w-72 rounded h-96">
            <img className="ml-14 w-32" src={image} alt={name} />
            <h3 className="mb-3">{name}</h3>
            <p className="font-bold mb-2">
                {rating}⭐️ ({ratingNumber})
            </p>
            <h2 className="font-bold mb-1">{price}$</h2>
            <button className="bg-red-300 rounded p-2" onClick={onAddToCart}>Add to cart</button>
        </div>
    );
};

ProductComponent.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingNumber: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

const Cart = ({ cartItems }) => {
    return (
        <div className="cart-container">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img className="w-12" src={item.image} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.price}$</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
    })).isRequired,
};

const Products = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

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

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <div>
            <div className="grid custom-grid-cols">
                {items.map((item) => (
                    <ProductComponent
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        rating={item.rating}
                        ratingNumber={item.ratingNumber}
                        image={item.image}
                        onAddToCart={() => handleAddToCart(item)}
                    />
                ))}
            </div>
            <Cart cartItems={cart} />
        </div>
    );
};

export { Products };

