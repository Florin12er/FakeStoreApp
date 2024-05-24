import PropTypes from "prop-types";
import { useState } from "react";
import {
    Button,
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";

const CartComponent = ({ name, image, price, quantity, onRemove }) => {
    return (
        <>
            <div className="border-solid border-2 border-black rounded ml-4 mb-4 w-80 h-96">
                <img className="w-32 ml-8" src={image} />
                <h3 className="text-center font-bold">{name}</h3>
                <p className="text-center font-bold">{price}$</p>
                <p className="text-center mb-2">Quantity:     <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {quantity}
                </span></p>
                <Button className="bg-red-300 hover:bg-red-500 ml-28 rounded p-3" onClick={onRemove}>Remove</Button>
            </div>
        </>
    );
};

CartComponent.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
};

const CheckoutModal = ({ isOpen, closeModal }) => {
    return (
        <Transition appear show={isOpen}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <div
                    className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
                    aria-hidden="true"
                ></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <DialogTitle
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Payment successful
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Your payment has been successfully submitted. We’ve sent you
                                        an email with all of the details of your order.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <Button
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-4 py-2 text-sm font-medium text-black hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    >
                                        Got it, thanks!
                                    </Button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

CheckoutModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

const Cart = ({ cartItems, setCart }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRemoveItem = (id) => {
        setCart(cartItems.filter((item) => item.id !== id));
    };

    const handleCheckout = () => {
        setIsModalOpen(true);
        setCart([]); // Clear items on checkout
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Calculate total price and total quantity
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    return (
        <>
            <h1 className="ml-8 text-3xl">Your Items:</h1>
            <div className="grid ml-20 grid-cols-2 custom-height place-items-center">
                <div className="grid grid-cols-3 custom-width">
                    {cartItems.map((item) => (
                        <CartComponent
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            onRemove={() => handleRemoveItem(item.id)}
                            image={item.image}
                        />
                    ))}
                </div>
                <div>
                    <h2 className="text-5xl">Summary:</h2>
                    <p className="font-bold mb-4 mt-4">Total Quantity:  
    <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {totalQuantity}
                </span>

                    </p>
                    <p className="font-bold mb-4">Total Price: ${totalPrice.toFixed(2)}</p>
                    <Button
                        onClick={handleCheckout}
                        className="bg-red-300 hover:bg-red-500 text-black p-2 rounded"
                    >
                        Checkout
                    </Button>
                </div>
            </div>
            <CheckoutModal isOpen={isModalOpen} closeModal={closeModal} />
        </>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        }),
    ).isRequired,
    setCart: PropTypes.func.isRequired,
};

export { Cart };
